import React from 'react';
import { Helmet } from 'react-helmet';
import { CgPokemon } from 'react-icons/cg';
import { MdCatchingPokemon } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

import img from '../assets/img/Charizard-Pokemon.png';
import { Anchor } from '../components/Anchor/Anchor';
import { paths } from '../routes/app_route';

const Home: React.FC = () => {
  return (
    <div className="bg-orange bg-no-repeat bg-cover w-screen h-screen flex justify-between p-8 relative">
      <Helmet>
        <meta name="description" content="Pokemon list app" />
        <link rel="icon" href="/public/pokemon_favicon.svg" type="image/svg" />

        <title>Home - Pokédex</title>
      </Helmet>

      <div className="flex flex-col justify-center">
        <div className="bg-white p-2 mb-8 mr-auto rounded-xl">
          <MdCatchingPokemon size={40} color="#fe6613" />
        </div>
        <div className="text-white">
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
          <Link to={paths.POKEDEX} reloadDocument>
            <button
              type="button"
              className="flex items-center justify-between bg-yellow-400 p-3 font-bold rounded-md hover:bg-zinc-100  transition duration-500 drop-shadow-2xl shadow-black"
            >
              <CgPokemon size={20} className="mr-2" />
              Get list pokémon
            </button>
          </Link>
        </div>

        <div className="flex absolute bottom-5">
          <Anchor url="https://github.com/TiagoM13">
            <GithubLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
          <Anchor url="https://www.linkedin.com/in/tiago-mota-4690591a8/">
            <LinkedinLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
          <Anchor url="https://twitter.com/tiago_m13">
            <TwitterLogo size={25} weight="bold" color="#FFF" />
          </Anchor>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={img} alt="Pikachu" width={650} loading="lazy" />
      </div>
    </div>
  );
};

export default Home;
