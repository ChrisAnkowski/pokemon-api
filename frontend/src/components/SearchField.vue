<script setup>
import { computed, defineProps, ref } from "vue";
const props = defineProps(["pokemonData"]);
let searchTerm = ref("");
let selectedPokemon = ref("");

const selectPokemon = (pokemon) => {
  selectedPokemon.value = pokemon;
  searchTerm.value = "";
};

const searchPokemon = computed(() => {
  if (searchTerm.value === "") {
    return [];
  }

  let matches = 0;

  if (props.pokemonData.pokemon.length) {
    return props.pokemonData.pokemon.filter((pokemon) => {
      if (
        pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
        matches < 10
      ) {
        matches++;
        return pokemon;
      }
    });
  }
  return [];
});
</script>

<template>
  <input
    type="text"
    placeholder="Suche nach einem Pokemon..."
    v-model="searchTerm"
    class="font-start nice-shadow uppercase p-3 flex space-between items-center bg-white w-full h-14 mb-3 rounded-xl focus:outline-none"
    :class="{ 'rounded-b-none': searchPokemon.length > 1 }"
  />
  <ul
    class="w-[calc(100%+-24px)] bg-white absolute top-[68px] left-[12px] z-20 border-solid border-b-4 border-red-800 nice-shadow-outside-bottom"
    v-if="searchPokemon.length"
  >
    <li
      v-for="pokemon in searchPokemon"
      :key="pokemon.name"
      @click="$emit('choosePokemon', pokemon)"
    >
      {{ pokemon.name }}
    </li>
  </ul>
</template>

<style scoped></style>
