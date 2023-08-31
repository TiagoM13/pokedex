import React from 'react';
import '@testing-library/jest-dom';

import { Button } from '@components';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Button/>', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('renders the button component', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should  button be hidden when height is false', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    jest.spyOn(React, 'useState').mockReturnValue([false, jest.fn()]);

    userEvent.click(buttonElement);

    expect(buttonElement).not.toBeVisible();
  });

  it('should the display none for the button', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    expect(buttonElement).toHaveStyle('display: none');
  });

  it('should scrolls to top when button is clicked', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    const scrollToSpy = jest.spyOn(window, 'scrollTo');

    fireEvent.click(buttonElement);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    scrollToSpy.mockRestore();
  });
});
