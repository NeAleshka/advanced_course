import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, type ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileReducers} from 'pages/ProfilePage';
import {useSelector} from 'react-redux';
import {fetchProfileData, getLoading, getProfileData} from 'entities/Profile';
import {useEffect, useState} from 'react';
import {useAppDispatch} from 'shared/lib/hooks';
import {Loader} from 'widgets/Loader';
import {Controller, useForm} from 'react-hook-form';
import {type Profile} from '../model/types';
import classes from './ProfilePage.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Country, Currency} from 'pages/ProfilePage/model/consts';
import {updateProfileData} from 'entities/Profile/model/services/updateProfileData';

interface ProfilePageProps {
	className?: string;
}

const reducers: ReducersList = {
	profile: profileReducers,
};

type profileDataKeys = keyof Profile;

const ProfilePage = ({className = ''}: ProfilePageProps) => {
	const {t} = useTranslation();
	const profileData = useSelector(getProfileData);
	const isLoading = useSelector(getLoading);
	const dispatch = useAppDispatch();
	const [readOnly, setReadOnly] = useState(true);
	const [isFormDirty, setIsFormDirty] = useState(false);

	const {register, handleSubmit, formState: {errors, isValid}, setValue, control, reset} = useForm<Profile>({mode: 'onChange',
		defaultValues: {
			country: profileData?.country,
			currency: profileData?.currency,
			firstName: profileData?.firstName,
			lastName: profileData?.lastName,
			city: profileData?.city,
			age: profileData?.age,
			login: profileData?.login,
		}});

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	useEffect(() => {
		if (profileData) {
			Object.keys(profileData).forEach(field => {
				setValue(field as profileDataKeys, profileData[field as profileDataKeys]);
			});
		}
	}, [profileData, setValue]);

	const cancelChanges = () => {
		reset();
		setReadOnly(true);
	};

	const updateData = () => {
		setReadOnly(false);
	};

	const onSubmit = (data: Profile) => {
		setReadOnly(true);
		dispatch(updateProfileData(data));
	};

	const handleInputChange = () => {
		if (!isFormDirty) {
			setIsFormDirty(true);
		}
	};

	return (
		<DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount={true}>
			<div className={classNames('', {}, [className])}>
				<div>{t('profile_page')}</div>
				{
					isLoading ? <Loader/> : <>
						<form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
							<input {...register('firstName', {
								minLength: {
									value: 2,
									message: 'Минимальная длина имени 2 буквы',
								},
								disabled: readOnly,
							})} onChange={handleInputChange}/>
							{errors.firstName && <div>{errors.firstName.message}</div>}
							<input defaultValue={profileData?.lastName} {...register('lastName', {
								minLength: {
									value: 2,
									message: 'Минимальная длина фамилии 2 буквы',
								},
								disabled: readOnly,
							})}/>
							{errors.lastName && <div>{errors.lastName.message}</div>}
							<input defaultValue={profileData?.age} {...register('age', {
								required: {
									value: true,
									message: 'Поле не может быть пустым',
								},
								pattern: {
									value: /^\d+$/,
									message: 'Возраст должен содержать только цифры',
								},
								disabled: readOnly,
							})} onChange={handleInputChange}/>
							{errors.age && <div>{errors.age.message}</div>}
							<input defaultValue={profileData?.city} {...register('city', {
								minLength: {
									value: 2,
									message: 'Минимальная длина города 2 буквы',
								},
								disabled: readOnly,
							})} onChange={handleInputChange}/>
							<Controller
								control={control}
								disabled={readOnly}
								render={({field}) => (
									<select {...field} onChange={handleInputChange}>
										{Object.values(Country).map(item => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								)}
								name='country'
							/>
							<Controller
								control={control}
								disabled={readOnly}
								defaultValue={profileData?.currency}
								render={({field}) => (
									<select {...field } onChange={handleInputChange}>
										{Object.values(Currency).map(item => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								)}
								name='currency'
							/>
							<input defaultValue={profileData?.login} {...register('login', {
								required: {
									value: true,
									message: 'Поле не может быть пустым',
								},
								disabled: readOnly,
							})} onChange={handleInputChange}/>
							{errors.login && <div>{errors.login.message}</div>}
							{
								readOnly ? <Button onClick={updateData} theme={ButtonTheme.INVERTEDBACKGROUND}>Изменить</Button>
									: <>
										<Button onClick={cancelChanges} >Отменить</Button>
										{isFormDirty && <Button type={'submit'} disabled={!isValid}>Сохранить</Button>}
									</>
							}

						</form>
					</>
				}

			</div>
		</DynamicModuleLoader>

	);
};

export default ProfilePage;
