import React from 'react';

import { render } from '@testing-library/react';

import { ShowMoreButton } from '../ShowMoreButton';

describe('<ShowMoreButton/>', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <ShowMoreButton loadItems={false} showMoreItems={jest.fn()} />
    );
    const elementButton = getByTestId('icon');

    expect(elementButton).toBeTruthy();
    expect(getByText('Show more pokemons')).toBeTruthy();
    expect(elementButton).not.toHaveClass('animate-loading');
  });

  it('should render correctly', () => {
    const { getByText, getByTestId, queryAllByText } = render(
      <ShowMoreButton loadItems showMoreItems={jest.fn()} />
    );
    const elementButton = getByTestId('icon');

    expect(queryAllByText('Show more pokemons').length).not.toBeTruthy();

    expect(elementButton).toBeTruthy();
    expect(getByText('Loading pokemons...')).toBeTruthy();
    expect(elementButton).toHaveClass('animate-loading');
  });
});
