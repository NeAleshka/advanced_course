import cls from './LangSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import i18n from 'shared/config/i18n';
import {memo} from 'react';

type LangSwitcherProps = {
	className?: string;
	short?: boolean;
};

export const LangSwitcher = memo((props: LangSwitcherProps) => {
	const {className = '', short = false} = props;
	const {t} = useTranslation();
	const toggleLang = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then();
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={toggleLang}
			className={classNames(cls.LangSwitcher, {}, [className])}
		>
			{short ? t('short_lang') : t('lang')}
		</Button>
	);
});
