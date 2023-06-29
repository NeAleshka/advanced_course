import cls from './LangSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import i18n from 'shared/config/i18n';

type LangSwitcherProps = {
	className?: string;
};

export const LangSwitcher = (props: LangSwitcherProps) => {
	const {className = ''} = props;
	const {t} = useTranslation();
	const toggleLang = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then();
	};

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggleLang} className={classNames(cls.LangSwitcher, {}, [className])}>
			{t('lang')}
		</Button>
	);
};
