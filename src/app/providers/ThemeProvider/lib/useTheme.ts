import { useContext } from 'react';
import { LOCAL_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type UseThemeResult = {
	theme: Theme;
	toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme = Theme.LIGHT } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme :Theme;
        switch (theme) {
        case Theme.LIGHT: newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE: newTheme = Theme.DARK;
            break;
        default: newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);

        localStorage.setItem(`${LOCAL_THEME_KEY}`, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
