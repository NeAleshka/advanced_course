import 'app/styles/index.scss';
import {type StoryFn} from '@storybook/react';
import {type Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
	<div className={`app ${theme}`}>
		<Story />
	</div>
);
