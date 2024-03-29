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

    if (value >= 15) {
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
      className="fixed bottom-0 z-10 mx-2 mb-6 animate-reveal rounded-md bg-blue-600/75 p-2 transition-all hover:scale-105 hover:bg-blue-600"
      style={{
        display: height ? 'block' : 'none',
      }}
    >
      <ArrowFatLineUp size={30} color="#f7f7f7" weight="fill" />
    </button>
  );
};
