/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import React from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

interface LoadingProps {
  title_page: string;
}

export const Loading = ({ title_page }: LoadingProps) => {
  return (
    <h1 className="text-2xl text-center font-bold flex items-center gap-2">
      <MdOutlineCatchingPokemon size={35} className="text-red-600 animate-loading" />
      Loading {title_page}...
    </h1>
  );
};
