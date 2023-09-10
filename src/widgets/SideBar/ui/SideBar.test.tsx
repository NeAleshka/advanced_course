import {fireEvent, render, screen} from '@testing-library/react';
import {SideBar} from './SideBar';
import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

const TestSideBar = () => <Suspense fallback={''}>
	<BrowserRouter>
		<SideBar />
	</BrowserRouter>
</Suspense>;

describe('SideBAr tests', () => {
	test('side bar with id', () => {
		render(<TestSideBar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle collapsed', () => {
		render(<TestSideBar/>);
		const toggleBtn = screen.getByTestId('toggle-btn');
		const SideBar = screen.getByTestId('sidebar');
		fireEvent.click(toggleBtn);
		expect(SideBar).toHaveClass('SideBar');
	});
});