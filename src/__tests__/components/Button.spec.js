import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../components/Button';

describe('<Button />', () => {
    const mockText = 'buttonText';
    const mockOnClick = jest.fn();


    it('render correctly', () => {
        render(<Button text={mockText} onClick={mockOnClick} />)
    })
    it('render with text', () => {
        render(<Button text={mockText} onClick={mockOnClick} />)
        
        const text = screen.getByText(mockText);

        expect(text).toBeInTheDocument();
        expect(text.textContent).toEqual(mockText);
    })
    it('on click event', () => {
        render(<Button text={mockText} onClick={mockOnClick} />)
        
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();

        userEvent.click(button);

        expect(mockOnClick).toHaveBeenCalled();
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).not.toHaveBeenCalledTimes(2);
    })
});