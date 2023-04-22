import React from 'react';

type TabsProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  isActive?: boolean;
  status: 'open' | 'closed';
};

export const Tabs = ({
  title,
  isActive = false,
  status,
  ...rest
}: TabsProps) => {
  return (
    <button
      {...rest}
      type="button"
      className="h-11 flex flex-1 px-5 items-center justify-center text-sm"
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
