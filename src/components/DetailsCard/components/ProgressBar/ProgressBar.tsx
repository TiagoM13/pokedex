import React from 'react';

type IProgressBar = {
  amount: number;
};

export const ProgressBar = ({ amount }: IProgressBar) => {
  const [progress, setProgress] = React.useState(0);
  const maxPercentage = 100;

  let percentage = (amount / 100) * maxPercentage;

  if (percentage > 100) {
    percentage = 100;
  }

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div role="progressbar" className="h-2 w-full rounded bg-zinc-400">
      <div
        className="h-2 rounded-xl bg-green-400 transition-all duration-500"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
