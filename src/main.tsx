import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18n';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';

render(

	<ThemeProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<App/>
			</ErrorBoundary>
		</BrowserRouter>
	</ThemeProvider>
	,
	document.getElementById('root'),
);

