import {useTheme} from 'app/providers/ThemeProvider';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import {DarkThemeIcon, LightThemeIcon} from 'shared/assets/icons';

export const ThemeSwitcher = () => {
	const {toggleTheme, theme} = useTheme();

	return (
		<div>
			<Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
				{theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/> }
			</Button>
		</div>
	);
};

