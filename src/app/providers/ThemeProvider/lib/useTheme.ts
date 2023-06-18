import {LOCAL_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext} from 'react';

type UseThemeResult = {
	theme: Theme;
	toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
	const {setTheme, theme = Theme.LIGHT} = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

		setTheme?.(newTheme);

		localStorage.setItem(`${LOCAL_THEME_KEY}`, newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
};
