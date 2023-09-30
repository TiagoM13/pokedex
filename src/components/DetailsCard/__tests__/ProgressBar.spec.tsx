import React from 'react';

import { render, waitFor } from '@testing-library/react';
import { debug } from 'console';

import { ProgressBar } from '../components';

describe('<ProgressBar/>', () => {
  it('should render correctly component', async () => {
    const amount = 50;
    const { container } = render(<ProgressBar amount={amount} />);

    const progressBarElement = container.querySelector('.bg-green-400');

    await waitFor(
      () => {
        const progressBarStyles = getComputedStyle(progressBarElement!);
        const width = progressBarStyles.getPropertyValue('width');
        const percentage = parseFloat(width || '0px');

        expect(percentage).toBeCloseTo(amount, 1);
      },
      { timeout: 1000 }
    );
  });

  it('should check if amount is greater than 100', async () => {
    let amount = 120;
    const { container } = render(<ProgressBar amount={amount} />);

    const progressBarElement = container.querySelector('.bg-green-400');

    await waitFor(
      () => {
        if (amount > 100) {
          amount = 100;
        }

        const progressBarStyles = getComputedStyle(progressBarElement!);
        const width = progressBarStyles.getPropertyValue('width');
        const percentage = parseFloat(width || '0px');

        expect(percentage).toBeCloseTo(amount, 1);
      },
      { timeout: 1000 }
    );
  });
});
