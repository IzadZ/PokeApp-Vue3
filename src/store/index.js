import { defineStore } from 'pinia';
import { API_URL } from './constants';
import axios from 'axios';

export const usePokemonApi = defineStore('pokemon', {
  state: () => ({ pokemons: [] }),
  getters: {},
  actions: {
    async fetchPokemon(limit = 50, offSet = 1) {
      try {
        const pokemons = [];
        for (let index = offSet; index <= limit; index++) {
          const pokemon = await axios.get(`${API_URL}/${index}`);
          pokemons.push(pokemon.data);
        }
        this.pokemons = [...this.pokemons, ...pokemons];
      } catch (error) {
        console.error(
          `An error occured while fetching data pokemons : ${error}`,
        );
      }
    },
  },
});
