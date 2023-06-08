import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export const LoadingSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#D9D9D9" highlightColor="#E6E6E6">
      <div className="my-2 flex h-[160px] w-full items-center justify-between rounded-md border bg-white py-4 px-2 shadow-md">
        <div className="mt-4">
          <Skeleton className="block h-2 w-20 screen-2x:h-3 screen-2x:w-24" />
          <Skeleton className="-mt-3 block h-1 w-10 screen-2x:h-2 screen-2x:w-14" />
          <Skeleton className="-mt-2 block h-4 w-16 screen-2x:h-5 screen-2x:w-20" />
        </div>

        <Skeleton className="h-24 w-24 screen-2x:h-32 screen-2x:w-32" circle />
      </div>
    </SkeletonTheme>
  );
};
