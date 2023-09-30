import React from 'react';

import { render } from '@testing-library/react';
import { X } from 'phosphor-react';

import { InfoBox } from '../components';

describe('<InfoBox/>', () => {
  it('should render correctly component', () => {
    const { getByText } = render(
      <InfoBox
        title="Title"
        icon={<X data-testid="icon" />}
        component={<p>Paragraph</p>}
      />
    );

    const titleElement = getByText('Title');
    const paragraphElement = getByText('Paragraph');
    const iconElement = getByText('Paragraph');

    expect(titleElement).toBeTruthy();
    expect(paragraphElement).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });
});
