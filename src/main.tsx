import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import './app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StrictMode } from 'react';
import App from './app/App';

render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <StoreProvider>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </StoreProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById('root'),
);
