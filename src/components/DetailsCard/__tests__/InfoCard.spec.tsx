import React from 'react';

import { render } from '@testing-library/react';
import { formatHeightWeight } from '@utils';

import { InfoCard } from '../components';

describe('<InfoCard/>', () => {
  it('should render correctly component', () => {
    const mockInfo = {
      weight: 170,
      height: 13,
      abilities: [
        {
          ability: {
            name: 'Power Fire',
          },
        },
      ],
    };

    const { getByText } = render(<InfoCard info={mockInfo} />);

    expect(getByText('Weight')).toBeTruthy();
    expect(getByText(`${formatHeightWeight(mockInfo.weight)} kg`)).toBeTruthy();
    expect(getByText('Height')).toBeTruthy();
    expect(getByText(`${formatHeightWeight(mockInfo.height)} m`)).toBeTruthy();
    expect(getByText('Abilities')).toBeTruthy();
    expect(getByText(mockInfo.abilities[0].ability.name)).toBeTruthy();
  });
});
