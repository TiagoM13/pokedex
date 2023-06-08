import React from 'react';

import { useImageLazyLoader } from '@hooks';

type ImageProps = {
  imageUrl: string;
  name: string;
};

export const ImageLazyLoader = ({ imageUrl, name }: ImageProps) => {
  const { isLoading, imageSrc } = useImageLazyLoader({ imageUrl });

  if (isLoading) {
    return (
      <div className="ml-auto h-[90px] w-[90px] animate-pulse rounded-full bg-gray-300/50 screen-3x:h-[140px] screen-3x:w-[140px] screen-2x:h-36 screen-2x:w-36" />
    );
  }

  return (
    <img
      className="object-cotain w-full overflow-hidden screen-2x:max-w-[200px]"
      src={imageSrc || ''}
      alt={`Pokémon - ${name}`}
      loading="lazy"
    />
  );
};
