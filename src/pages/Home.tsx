import React from 'react';
import { CgPokemon } from 'react-icons/cg';
import { MdCatchingPokemon } from 'react-icons/md';
import { Link } from 'react-router-dom';

import img from '@assets/img/Charizard-Pokemon.png';
import { SocialMedia } from '@components';

const Home = () => {
  return (
    <div className="bg-orange bg-no-repeat bg-cover bg-clip-content w-screen h-screen">
      <div className="max-w-[1320px]  mx-auto flex justify-between p-6 screen-3x:flex-col screen-3x:justify-start  screen-1x:py-6 screen-xs:gap-0">
        <div className="flex flex-col justify-center">
          <div className="bg-white p-2 mb-8 mr-auto rounded-xl screen-1x:mb-4 screen-1x:p-1">
            <MdCatchingPokemon
              size={40}
              color="#fe6613"
              className="screen-1x:w-8 screen-1x:h-8"
            />
          </div>
          <div className="text-white">
            <h1 className="text-4xl font-bold screen-1x:text-3xl screen-xs:text-2xl">
              <span className="text-6xl font-extrabold screen-xs:text-5xl">
                Pokédex
              </span>
              <br />
              Get the list of all pokemons!
            </h1>
            <h2 className="text-2xl font-semibold mt-4 screen-1x:text-xl screen-1x:mt-1">
              All generations available in one place.
            </h2>
          </div>

          <div className="py-4 my-4 screen-xs:py-0">
            <Link to="/Pokedex" reloadDocument>
              <button
                type="button"
                className="flex items-center justify-between bg-yellow-400 p-3 text-lg font-bold rounded-md hover:bg-zinc-100 transition duration-500 drop-shadow-2xl shadow-black screen-xs:text-base"
              >
                <CgPokemon size={25} className="mr-2" />
                Get list pokémon
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src={img} alt="Charizard" width={600} loading="eager" />
        </div>

        <div className="absolute bottom-5 screen-1x:bottom-3 screen-1x:left-1/2 screen-1x:-translate-x-1/2">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export { Home };
