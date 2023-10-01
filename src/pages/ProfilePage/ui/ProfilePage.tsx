import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducers } from 'pages/ProfilePage';
import { useSelector } from 'react-redux';
import {
    fetchProfileData, getLoading, getProfileData, getProfileError,
} from 'entities/Profile';
import React, { type ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks';
import { Loader } from 'widgets/Loader';
import { Controller, useForm } from 'react-hook-form';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Country, Currency } from 'pages/ProfilePage/model/consts';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import classes from './ProfilePage.module.scss';
import { type Profile } from '../model/types';
import { inputFieldsArray } from './fieldsArray';

const reducers: ReducersList = {
    profile: profileReducers,
};

type profileDataKeys = keyof Profile;

const ProfilePage = () => {
    const { t } = useTranslation('profilePage');
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getProfileError);
    const dispatch = useAppDispatch();
    const [readOnly, setReadOnly] = useState(true);
    const [isFormDirty, setIsFormDirty] = useState(false);

    const {
        register, handleSubmit, formState: { errors, isValid }, setValue, control, reset,
    } = useForm<Profile>({ mode: 'onChange' });

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    useEffect(() => {
        if (profileData) {
            Object.keys(profileData).forEach((field) => {
                setValue(field as profileDataKeys, profileData[field as profileDataKeys]);
            });
        }
    }, [profileData, setValue]);

    const cancelChanges = () => {
        reset();
        setReadOnly(true);
    };

    const updateData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setReadOnly(false);
    };

    const onSubmit = (data: Profile) => {
        setReadOnly(true);
        setIsFormDirty(false);
        dispatch(updateProfileData(data));
    };

    const handleInputChange = () => {
        if (!isFormDirty) {
            setIsFormDirty(true);
        }
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>, fieldName: profileDataKeys) => {
        setIsFormDirty(true);
        setValue(fieldName, event.currentTarget.value);
    };

    const inputMods = {
        [classes.disabled]: readOnly,
    };
    if (error) {
        return <div>Произошла ошибка</div>;
    }

    return (
        <DynamicModuleLoader asyncReducers={reducers}>
            <div className={classes.wrapper}>
                <div className={classes.title}>{t('profile')}</div>
                {
                    isLoading ? <Loader /> : (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                                {
                                    inputFieldsArray.map(({ fieldName, options }) => (
                                        <div key={fieldName}>
                                            <div className={classes.filed}>
                                                <span style={{ marginRight: '10px' }}>
                                                    {t(`userInfo.${fieldName}`)}
                                                </span>
                                                <input
                                                    defaultValue={profileData?.[fieldName]}
                                                    className={classNames('', inputMods)}
                                                    {...register(fieldName, { ...options })}
                                                    disabled={readOnly}
                                                    onChange={handleInputChange}
                                                />

                                            </div>
                                            {errors[fieldName] && <div>{errors[fieldName]?.message}</div>}
                                        </div>
                                    ))
                                }
                                <div className={classes.filed}>
                                    <span style={{ marginRight: '18px' }}>{t('userInfo.country')}</span>
                                    <div style={{ flexGrow: '1' }}>

                                        <Controller
                                            control={control}
                                            render={({ field: { value } }) => (
                                                <select
                                                    value={value}
                                                    onChange={(event) => {
                                                        handleSelectChange(event, 'country');
                                                    }}
                                                    style={{ width: '100%' }}
                                                    disabled={readOnly}
                                                >
                                                    {Object.values(Country).map((item) => (
                                                        <option key={item} value={item}>
                                                            {item}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                            name="country"
                                        />
                                    </div>

                                </div>
                                <div className={classes.filed}>
                                    <span style={{ marginRight: '18px' }}>{t('userInfo.currency')}</span>
                                    <div style={{ flexGrow: '1' }}>
                                        <Controller
                                            control={control}
                                            disabled={readOnly}
                                            defaultValue={profileData?.currency}
                                            render={({ field }) => (
                                                <select {...field} style={{ width: '100%' }}>
                                                    {Object.values(Currency).map((item) => (
                                                        <option key={item} value={item}>
                                                            {item}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                            name="currency"
                                        />
                                    </div>

                                </div>
                                <div className={classes.profile_action}>
                                    {
                                        readOnly
                                            ? (
                                                <span style={{ marginTop: '20px' }}>
                                                    <Button
                                                        onClick={(event) => {
                                                            updateData(event);
                                                        }}
                                                        theme={ButtonTheme.INVERTEDBACKGROUND}
                                                    >
                                                        Изменить
                                                    </Button>

                                                </span>
                                            )
                                            : (
                                                <>
                                                    <Button onClick={cancelChanges}>Отменить</Button>
                                                    {isFormDirty && (
                                                        <Button type="submit" disabled={!isValid}>
                                                            Сохранить
                                                        </Button>
                                                    )}
                                                </>
                                            )
                                    }
                                </div>
                            </form>
                        </>
                    )
                }

            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
