import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockPokemons = [
  { id: 1, name: 'Pikachu' },
  { id: 2, name: 'Charmander' },
];

const mock = new MockAdapter(axios);
mock.onGet(process.env.VITE_URL_API).reply(200, mockPokemons);
