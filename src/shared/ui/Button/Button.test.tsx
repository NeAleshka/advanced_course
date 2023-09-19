import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

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
