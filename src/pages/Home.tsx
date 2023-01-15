import React from 'react';
import { CgPokemon } from 'react-icons/cg';
import { MdCatchingPokemon } from 'react-icons/md';

import img from '../assets/img/charizard.png';

const Home: React.FC = () => {
  return (
    <div className="bg-orange w-screen h-screen flex justify-between p-8">
      <div className="flex flex-col justify-center">
        <div className="bg-white p-2 mb-8 mr-auto rounded-xl">
          <MdCatchingPokemon size={40} color="#fe6613" />
        </div>
        <div className="text-white p-">
          <h1 className="text-4xl font-bold">
            <span className="text-6xl">Pokédex</span>
            <br />
            Get the list of all pokemons!
          </h1>
          <h2 className="text-2xl font-semibold mt-4">
            All generations available in one place.
          </h2>
        </div>

        <div className="py-4 my-4">
          <button
            type="button"
            className="flex items-center justify-between bg-yellow-400 p-3 font-bold rounded-md hover:bg-zinc-100  transition duration-500 drop-shadow-2xl shadow-black"
          >
            <CgPokemon size={20} className="mr-2" />
            Get list pokémon
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="Pikachu" loading="lazy" width="550px" />
      </div>
    </div>
  );
};

export default Home;
