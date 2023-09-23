/* eslint-disable no-template-curly-in-string */
import React from 'react';

import { render } from '@testing-library/react';

import { TypeCard } from '../TypeCard';

describe('<TypeCard />', () => {
  it('displays the type and background color', () => {
    const mockType = {
      type: 'fire',
      icon: '/public/images/fire.svg',
      color: 'red',
    };

    const getTypesToColor = jest.fn();

    getTypesToColor.mockReturnValue(mockType.color);

    const { getByText, getByAltText } = render(
      <TypeCard type={mockType.type} icon={mockType.icon} />
    );

    const typeText = getByText(mockType.type.toUpperCase());
    const typeIcon = getByAltText(`Type ${mockType.type}`);

    expect(typeText).toBeInTheDocument();
    expect(typeIcon).toBeInTheDocument();
    expect(typeText).toHaveStyle('background-color: ${mockType.color}');
  });
});
