<template>
  <div>
    <PokeCard v-for="pokemon in pokemons" :pokemon="pokemon" />
  </div>
</template>
<script setup>
import { onBeforeMount, computed } from 'vue';
import { usePokemonApi } from '../../store';
import PokeCard from '../Molecules/PokeCard.vue';
const store = usePokemonApi();
const pokemons = computed(() => store.pokemons);
onBeforeMount(async () => {
  await store.fetchPokemon();
});
</script>
<style lang="scss"></style>
