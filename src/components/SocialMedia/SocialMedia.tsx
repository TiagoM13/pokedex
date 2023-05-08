import React from 'react';

import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

import { Anchor } from '..';

export const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-1 items-center">
      <Anchor url="https://github.com/TiagoM13">
        <GithubLogo size={25} weight="bold" />
      </Anchor>
      <Anchor url="https://www.linkedin.com/in/tiago-mota-4690591a8/">
        <LinkedinLogo size={25} weight="bold" />
      </Anchor>
      <Anchor url="https://twitter.com/tiago_m13">
        <TwitterLogo size={25} weight="bold" />
      </Anchor>
    </div>
  );
};
