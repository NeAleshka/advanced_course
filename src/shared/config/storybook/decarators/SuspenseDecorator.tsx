import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const SuspenseDecorator = () => (Story: StoryFn) => (
    <Suspense fallback="">
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </Suspense>
);
