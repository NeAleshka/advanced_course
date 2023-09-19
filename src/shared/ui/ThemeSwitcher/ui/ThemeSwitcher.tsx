import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { DarkThemeIcon, LightThemeIcon } from 'shared/assets/icons';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div>
            <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
                {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon /> }
            </Button>
        </div>
    );
});
