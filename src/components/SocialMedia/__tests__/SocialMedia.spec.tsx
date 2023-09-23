import React from 'react';

import { render } from '@testing-library/react';

import { SocialMedia } from '../SocialMedia';

describe('<SocialMedia/>', () => {
  it('shold the correcly render', () => {
    const { getByTestId } = render(<SocialMedia />);

    const githubIcon = getByTestId('github-icon');
    const linkedinIcon = getByTestId('linkedin-icon');
    const twitterIcon = getByTestId('twitter-icon');

    expect(githubIcon).toBeTruthy();
    expect(linkedinIcon).toBeTruthy();
    expect(twitterIcon).toBeTruthy();
  });
});
