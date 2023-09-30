import React from 'react';

import { render } from '@testing-library/react';

import { Tab } from '../components';

describe('<Tab/>', () => {
  it('should render correctly component', () => {
    const { getByText } = render(<Tab title="Info" isActive status="open" />);

    const tabElement = getByText('Info');

    expect(tabElement).toBeTruthy();
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #000000;');
    expect(tabElement).toHaveStyle('color: rgb(0, 0, 0)');
    expect(tabElement).toHaveStyle('border-bottom: 2px solid #000000;');
  });

  it('should not have the styles', () => {
    const { getByText } = render(
      <Tab title="Info" isActive={false} status="closed" />
    );

    const tabElement = getByText('Info');

    expect(tabElement).toBeTruthy();
    expect(tabElement).not.toHaveStyle('border-bottom: 2px solid #000000;');
    expect(tabElement).not.toHaveStyle('color: rgb(0, 0, 0)');
    expect(tabElement).not.toHaveStyle('border-bottom: 2px solid #000000;');
  });
});
