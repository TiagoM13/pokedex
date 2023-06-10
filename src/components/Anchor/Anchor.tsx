import React from 'react';

import { IAnchor } from '@interfaces';

export const Anchor = ({ children, url }: IAnchor) => {
  return (
    <a
      href={url}
      target="_blank"
      className="mr-2 rounded-[50%] border-2 p-1 text-white transition duration-200 hover:scale-105 hover:border-blue-700 hover:text-blue-700"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
