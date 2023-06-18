import {createContext} from 'react';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ThemeContextProps = {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_THEME_KEY = 'theme';
