import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, type ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileReducers} from 'pages/ProfilePage';
import {useSelector} from 'react-redux';
import {fetchProfileData, getLoading, getProfileData} from 'entities/Profile';
import {useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks';
import {Loader} from 'widgets/Loader';

interface ProfilePageProps {
	className?: string;
}

const reducers: ReducersList = {
	profile: profileReducers,
};

const ProfilePage = ({className = ''}: ProfilePageProps) => {
	const {t} = useTranslation();
	const profileData = useSelector(getProfileData);
	const isLoading = useSelector(getLoading);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount={true}>
			<div className={classNames('', {}, [className])}>
				<div>{t('profile_page')}</div>
				{
					isLoading ? <Loader/> : <>
						<div>{profileData?.username}</div>
						<div>{profileData?.lastname}</div>
					</>
				}

			</div>
		</DynamicModuleLoader>

	);
};

export default ProfilePage;
