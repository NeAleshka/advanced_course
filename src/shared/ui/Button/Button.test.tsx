import {Button, ButtonTheme} from './Button';
import {render, screen} from '@testing-library/react';

describe('Button tests', () => {
	test('check btn text', () => {
		render(<Button>test</Button>);
		expect(screen.getByText('test')).toBeInTheDocument();
	});
	test('check btn class', () => {
		render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
		expect(screen.getByText('test')).toHaveClass('clear');
	});
});
