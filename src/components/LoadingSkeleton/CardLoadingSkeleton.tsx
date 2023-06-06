import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export const LoadingSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#D9D9D9" highlightColor="#E6E6E6">
      <div className="w-full h-[160px] border rounded-md shadow-md bg-white py-4 px-2 my-2 flex items-center justify-between">
        <div className="mt-4">
          <Skeleton className="w-20 h-2 block screen-2x:w-24 screen-2x:h-3" />
          <Skeleton className="w-10 h-1 block -mt-3 screen-2x:w-14 screen-2x:h-2" />
          <Skeleton className="w-16 h-4 block -mt-2 screen-2x:w-20 screen-2x:h-5" />
        </div>

        <Skeleton className="w-24 h-24 screen-2x:w-32 screen-2x:h-32" circle />
      </div>
    </SkeletonTheme>
  );
};
