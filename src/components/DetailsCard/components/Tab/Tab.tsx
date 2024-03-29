import React from 'react';

type TabProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  isActive?: boolean;
  status: 'open' | 'closed';
};

export const Tab = ({ title, isActive = false, status, ...rest }: TabProps) => {
  return (
    <button
      {...rest}
      type="button"
      className="flex h-11 flex-1 items-center justify-center px-5 text-sm"
      style={{
        borderBottom: isActive ? '2px solid #000000' : '',
        color: isActive ? '#000000' : '',
        fontWeight: isActive ? 'bold' : '',
      }}
    >
      {title}
    </button>
  );
};
