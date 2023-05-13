import React from 'react';

interface IUseImageLoader {
  imageUrl: string;
}

interface IImageLoaderResponse {
  isLoading: boolean;
  imageSrc: string | null;
}

export const useImageLazyLoader = ({
  imageUrl,
}: IUseImageLoader): IImageLoaderResponse => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setIsLoading(false);
      setImageSrc(imageUrl);
    };

    img.onerror = () => {
      setIsLoading(false);
      setImageSrc(null);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return { isLoading, imageSrc };
};
