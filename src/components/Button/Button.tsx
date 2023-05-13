import React from 'react';

import { ArrowFatLineUp } from 'phosphor-react';

export const Button = () => {
  const [height, setHeight] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const doc = document.documentElement;

  window.addEventListener('scroll', () => {
    const value = Math.floor(
      (100 * doc.scrollTop) / (doc.scrollHeight - doc.clientHeight)
    );

    if (value >= 5) {
      setHeight(true);
    } else {
      setHeight(false);
    }
  });

  return (
    <button
      type="button"
      title="back to the top"
      onClick={handleScrollToTop}
      className="fixed bg-blue-600 p-2 mx-2 mb-6 rounded-md bottom-0 hover:scale-105 hover:brightness-95 transition-all animate-reveal z-10"
      style={{
        display: height ? 'block' : 'none',
      }}
    >
      <ArrowFatLineUp size={30} color="#f7f7f7" weight="fill" />
    </button>
  );
};
