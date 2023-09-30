import React from 'react';

import { render } from '@testing-library/react';

import { BaseStats } from '../components';

describe('<BaseStats/>', () => {
  it('should render correctly component', () => {
    const mockStats = [
      {
        base_stat: 100,
        effort: 90,
        stat: {
          name: 'hp',
        },
      },
      {
        base_stat: 80,
        effort: 70,
        stat: {
          name: 'attack',
        },
      },
    ];

    const { getByText } = render(<BaseStats stats={mockStats} />);

    expect(getByText('Base Stats')).toBeTruthy();
    expect(getByText(mockStats[0].stat.name)).toBeTruthy();
    expect(getByText(mockStats[0].base_stat)).toBeTruthy();
    expect(getByText(mockStats[1].stat.name)).toBeTruthy();
    expect(getByText(mockStats[1].base_stat)).toBeTruthy();
  });
});
