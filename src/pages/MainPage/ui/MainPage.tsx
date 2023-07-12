import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';

const MainPage = () => {
	const {t} = useTranslation();
	return (
		<div>
			{t('main_page')}
			<Counter/>
		</div>
	);
};

export default MainPage;
