import React from 'react';

import { render } from '@testing-library/react';

import { Box } from '../components';

describe('<Box/>', () => {
  it('should render correctly component', () => {
    const { getByText } = render(<Box text="Title" />);

    const boxElement = getByText('Title');

    expect(boxElement).toBeTruthy();
  });
});
