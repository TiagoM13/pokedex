import React from 'react';

import { Button } from '@components';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Button/>', () => {
  it('renders the button component', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    expect(buttonElement).toBeInTheDocument();
  });

  it('button is hidden when height is false', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    jest.spyOn(React, 'useState').mockReturnValue([false, jest.fn()]);

    userEvent.click(buttonElement);

    expect(buttonElement).not.toBeVisible();
  });

  it('updates button visibility based on scroll position', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    jest.spyOn(React, 'useState').mockReturnValue([true, jest.fn()]);

    userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
  });

  it('scrolls to top when button is clicked', () => {
    const { getByTitle } = render(<Button />);
    const buttonElement = getByTitle('back to the top');

    const scrollToSpy = jest.spyOn(window, 'scrollTo');

    fireEvent.click(buttonElement);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    scrollToSpy.mockRestore();
  });
});
