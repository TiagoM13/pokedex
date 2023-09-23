import React from 'react';

import { render } from '@testing-library/react';

import { Anchor } from '../Anchor';

describe('<Anchor/>', () => {
  it('should render anchor with correct URL', () => {
    const link = 'https:google.com';
    const { debug, getByText } = render(<Anchor url={link}>Link Teste</Anchor>);

    const anchorElement = getByText('Link Teste');

    expect(anchorElement).toBeTruthy();
    expect(anchorElement).toHaveAttribute('href', link);
    debug();
  });

  it('should have "noreferrer" in the "rel" attribute', () => {
    const { getByText } = render(
      <Anchor url="https://example.com">Link Text</Anchor>
    );
    const anchorElement = getByText('Link Text');

    expect(anchorElement).toHaveAttribute('rel', 'noreferrer');
  });

  it('should apply hover styles correctly', () => {
    const { getByText } = render(
      <Anchor url="https://example.com">Link Text</Anchor>
    );
    const anchorElement = getByText('Link Text');

    expect(anchorElement).toHaveClass('hover:scale-105');
    expect(anchorElement).toHaveClass('hover:border-blue-700');
    expect(anchorElement).toHaveClass('hover:text-blue-700');
  });
});
