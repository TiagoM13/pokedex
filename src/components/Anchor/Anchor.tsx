import React from 'react';

import { IAnchor } from '../../interfaces/anchor';

export const Anchor = ({ children, url }: IAnchor) => {
  return (
    <a
      href={url}
      target="_blank"
      className="p-1 mr-2 hover:scale-105 transition duration-200 border-2 rounded-[50%]"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
