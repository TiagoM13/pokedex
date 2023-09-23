import React from 'react';

import { render } from '@testing-library/react';

import { Footer } from '../Footer';

describe('<Footer/>', () => {
  it('should render correctly component', () => {
    const { getByAltText, getByText } = render(<Footer />);

    const logoFooter = getByAltText('Logo pokemon');

    expect(logoFooter).toBeTruthy();
    expect(getByText('Powered by Tiago Mota Ribeiro')).toBeInTheDocument();
  });
});
