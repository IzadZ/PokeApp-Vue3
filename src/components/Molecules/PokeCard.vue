<template>
  <div class="poke-card">
    <PokeImage v-bind="getPokeImagesProps()" />
    <div>
      <h3>Name : {{ pokemon.name }}</h3>
      <p>Weight : {{ pokemon.weight }}</p>
      <p>Height : {{ pokemon.height }}</p>
    </div>
  </div>
</template>
<script setup>
import PokeImage from '../Atoms/PokeImage.vue';
const props = defineProps({
  pokemon: {
    type: Object,
  },
});
const getPokeImagesProps = () => ({
  url:
    props.pokemon.sprites.front_default || props.pokemon.sprites.back_default,
  altImg: props.pokemon.name,
});
</script>
<style lang="scss"></style>
