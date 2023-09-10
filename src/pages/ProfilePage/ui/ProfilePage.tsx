import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, type ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {profileReducers} from 'pages/ProfilePage';

interface ProfilePageProps {
	className?: string;
}

const reducers: ReducersList = {
	profile: profileReducers,
};

const ProfilePage = ({className = ''}: ProfilePageProps) => {
	const {t} = useTranslation();
	return (
		<DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount={true}>
			<div className={classNames('', {}, [className])}>
				{t('profile_page')}
			</div>
		</DynamicModuleLoader>

	);
};

export default ProfilePage;
