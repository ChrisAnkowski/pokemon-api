<script setup>
import { useKeypress } from "vue3-keypress";
import { Howl } from "howler";
import { computed, onMounted, ref } from "vue";
import clickSound from "./assets/demo_src_assets_back.wav";
import SearchField from "./components/SearchField.vue";

const previousButton = ref(null);
const ALL_POKEMON = import.meta.env.VITE_API_URL;
const RANDOM_POKEMON = import.meta.env.VITE_API_URL_RANDOM;
const data = ref();
const chosenPokemon = ref();
const show = ref(false);
const sound = new Howl({
  src: [clickSound],
});

onMounted(async () => {
  await fetch(ALL_POKEMON)
    .then((res) => res.json())
    .then((json) => (data.value = json));

  await fetch(RANDOM_POKEMON)
    .then((res) => res.json())
    .then((json) => (chosenPokemon.value = json.pokemon[0]))
    .then(() => {
      show.value = true;
    });
});

const prefixNumber = (number) => {
  return String(number).padStart(3, "0");
};

const getPreviousNumber = computed(() => {
  return prefixNumber(parseInt(chosenPokemon.value.number) - 1);
});

const getNextNumber = computed(() => {
  return prefixNumber(parseInt(chosenPokemon.value.number) + 1);
});

const getPokemonByNumber = async (param) => {
  sound.play();
  await fetch(ALL_POKEMON + "/" + param)
    .then((res) => res.json())
    .then((json) => setPokemon(json.pokemon));
};

const setPokemon = (pokemon) => {
  show.value = false;
  setTimeout(() => {
    chosenPokemon.value = pokemon;
    setTimeout(() => {
      show.value = true;
    }, 100);
  }, 100);
};

useKeypress({
  keyEvent: "keydown",
  keyBinds: [
    {
      keyCode: "left",
      success: () => {
        setTimeout(() => {
          previousButton.value.click();
        }, 200);
      },
    },
    {
      keyCode: "right",
      success: () => {
        getPokemonByNumber(getNextNumber.value);
      },
    },
  ],
});
</script>

<template>
  <div
    v-if="chosenPokemon"
    class="w-full mx-auto lg:rounded-xl flex flex-col lg:h-4/5 h-full bg-red-800 items-center p-3 relative border-2 border-rose-900 border-solid lg:shadow-[-10px_10px_0px_0px_rgba(0,0,0,1),-9px_9px_0px_0px_rgba(0,0,0,1),-8px_8px_0px_0px_rgba(0,0,0,1),-7px_7px_0px_0px_rgba(0,0,0,1),-6px_6px_0px_0px_rgba(0,0,0,1),-5px_5px_0px_0px_rgba(0,0,0,1),-4px_4px_0px_0px_rgba(0,0,0,1),-3px_3px_0px_0px_rgba(0,0,0,1),-2px_2px_0px_0px_rgba(0,0,0,1),-2px_2px_0px_0px_rgba(0,0,0,1),-1px_1px_0px_0px_rgba(0,0,0,1)] shadow-none"
  >
    <Suspense>
      <SearchField
        v-if="data"
        :pokemon-data="data"
        @choosePokemon="setPokemon"
      ></SearchField
    ></Suspense>
    <div
      class="lg:rounded-xl w-full grow bg-white flex flex-col justify-center items-center pb-5 px-5 nice-shadow z-10 overflow-y-auto"
    >
      <div class="w-full h-5 flex items-center justify-center">
        <div class="w-1 h-1 bg-black rounded-full mr-1"></div>
        <div class="w-1 h-1 bg-black rounded-full mr-1"></div>
        <div class="w-1 h-1 bg-black rounded-full"></div>
      </div>
      <div
        class="lg:rounded-xl grow w-full bg-white z-10 border-solid border-red-900 border-2 overflow-auto p-2"
      >
        <h1
          class="font-start transition-opacity duration-100 opacity-0"
          :class="{ show: show }"
        >
          {{ chosenPokemon.name }} <span>#{{ chosenPokemon.number }}</span>
        </h1>

        <img
          class="my-4 transition-opacity duration-100 opacity-0"
          :src="chosenPokemon.image"
          alt=""
          :class="{ show: show }"
          @click="test"
        />

        <div
          class="w-full break-words my-4 transition-opacity duration-100 opacity-0"
          v-html="chosenPokemon.description"
          :class="{ show: show }"
        ></div>

        <div
          class="w-full flex flex-row mb-2 transition-opacity duration-100 opacity-0"
          :class="{ show: show }"
        >
          <div
            class="w-2/5 p-4 border-2 border-solid border-red-900 uppercase font-start bg-red-900 text-white"
          >
            Typ
          </div>
          <div
            class="w-3/5 p-4 border-2 border-solid border-red-900 font-start"
          >
            {{ chosenPokemon.type }}
          </div>
        </div>
        <div
          class="w-full flex flex-row transition-opacity duration-100 opacity-0"
          :class="{ show: show }"
        >
          <div
            class="w-2/5 p-4 border-2 border-solid border-red-900 uppercase font-start bg-red-900 text-white"
          >
            Kategorie
          </div>
          <div
            class="w-3/5 p-4 border-2 border-solid border-red-900 font-start"
          >
            {{ chosenPokemon.category }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-14 mt-3 flex flex-row justify-between items-center">
      <div class="flex flex-row items-center ml-5">
        <div
          class="lense relative w-12 aspect-square bg-white rounded-full"
        ></div>
        <div
          class="lense lense-red relative w-5 aspect-square bg-white rounded-full ml-5"
        ></div>
        <div
          class="lense lense-green relative w-5 aspect-square bg-white rounded-full ml-5"
        ></div>
      </div>
      <div class="flex ml-5">
        <div
          ref="previousButton"
          class="h-12 w-12 p-2 bg-gray-100 text-center rounded decal mr-5 active:bg-gray-300 hover:bg-gray-200"
          @click="getPokemonByNumber(getPreviousNumber)"
        >
          <svg
            fill="transparent"
            class="h-full mx-auto fill-red-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            data-ember-extension="1"
          >
            <path
              d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            />
          </svg>
        </div>
        <div
          class="h-12 w-12 p-2 bg-gray-100 text-center rounded decal active:bg-gray-300 hover:bg-gray-200"
          @click="getPokemonByNumber(getNextNumber)"
        >
          <svg
            fill="transparent"
            class="h-full mx-auto fill-red-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            data-ember-extension="1"
          >
            <path
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col mr-5 sm:w-30 w-full ml-5">
        <div class="decal w-full h-2 bg-gray-100 rounded-full mb-2"></div>
        <div class="decal w-full h-2 bg-gray-100 rounded-full mb-2"></div>
        <div class="decal w-full h-2 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
