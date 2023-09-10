import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18n';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
import './app/styles/index.scss';
import {StoreProvider} from 'app/providers/StoreProvider';

render(
	<ThemeProvider>
		<BrowserRouter>
			<StoreProvider>
				<ErrorBoundary>
					<App/>
				</ErrorBoundary>
			</StoreProvider>
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root'),
);

