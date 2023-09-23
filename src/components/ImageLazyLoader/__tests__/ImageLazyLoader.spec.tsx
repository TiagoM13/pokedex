import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import * as hooksModule from '@hooks';
import { fireEvent, render } from '@testing-library/react';

import { ImageLazyLoader } from '../ImageLazyLoader';

jest.mock('@hooks');
const useImageLazyLoaderSpy = jest.spyOn(hooksModule, 'useImageLazyLoader');

const mockImage = {
  img: 'path/to/mock/image.png',
  name: 'Charmander',
};

describe('<ImageLazyLoader />', () => {
  beforeEach(() => {
    useImageLazyLoaderSpy.mockReturnValue({
      isLoading: false,
      imageSrc: mockImage.img,
    });
  });

  it('should displays the loading animation while image is loading', () => {
    useImageLazyLoaderSpy.mockReturnValue({
      isLoading: true,
      imageSrc: '',
    });

    const { getByTestId } = render(
      <ImageLazyLoader imageUrl={mockImage.img} name={mockImage.name} />
    );

    const loadingElemnt = getByTestId('loading-animation');

    expect(loadingElemnt).toBeInTheDocument();
  });

  it('calls handleSelectPokemon when image is clicked', () => {
    const { getByAltText } = render(
      <ImageLazyLoader imageUrl={mockImage.img} name={mockImage.name} />
    );

    const imageElement = getByAltText(`Pokémon - ${mockImage.name}`);

    fireEvent.click(imageElement);
    expect(imageElement).toBeTruthy();
  });

  it('should render image when image Url is provided', () => {
    const { getByAltText } = render(
      <ImageLazyLoader imageUrl={mockImage.img} name={mockImage.name} />
    );

    const imageElement = getByAltText(`Pokémon - ${mockImage.name}`);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockImage.img);
    expect(imageElement).toHaveAttribute('loading', 'lazy');
    expect(imageElement).toHaveClass('object-contain');
  });

  it('should render image when image Url is provided', () => {
    useImageLazyLoaderSpy.mockReturnValue({
      isLoading: false,
      imageSrc: '',
    });

    const { getByAltText } = render(
      <ImageLazyLoader imageUrl={mockImage.img} name={mockImage.name} />
    );

    const imageElement = getByAltText(`Pokémon - ${mockImage.name}`);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '');
  });
});
