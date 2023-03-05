import React from 'react';

import { IAnchor } from '../../interfaces/anchor';

export const Anchor = ({ children, url }: IAnchor) => {
  return (
    <a
      href={url}
      target="_blank"
      className="p-1 mr-2 text-white transition duration-200 border-2 rounded-[50%] hover:text-blue-700 hover:border-blue-700 hover:scale-105"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
