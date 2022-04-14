<script setup>
const API_URL = import.meta.env.VITE_API_URL;
</script>

<template>
  <div class="max-w-5xl lg:w-3/5 lg:rounded-xl flex flex-col w-full h-full lg:h-3/5 bg-red-800 items-center p-3 relative border-2 border-rose-900 border-solid lg:shadow-[-10px_10px_0px_0px_rgba(0,0,0,1),-9px_9px_0px_0px_rgba(0,0,0,1),-8px_8px_0px_0px_rgba(0,0,0,1),-7px_7px_0px_0px_rgba(0,0,0,1),-6px_6px_0px_0px_rgba(0,0,0,1),-5px_5px_0px_0px_rgba(0,0,0,1),-4px_4px_0px_0px_rgba(0,0,0,1),-3px_3px_0px_0px_rgba(0,0,0,1),-2px_2px_0px_0px_rgba(0,0,0,1),-2px_2px_0px_0px_rgba(0,0,0,1),-1px_1px_0px_0px_rgba(0,0,0,1)] shadow-none">
    <input type="text" placeholder="Type to Search..." class="font-swap nice-shadow uppercase p-3 flex space-between items-center bg-white w-full h-14 mb-3 rounded-xl">
    <div class="lg:rounded-xl w-full grow bg-white flex flex-col justify-center items-center pb-5 px-5 nice-shadow overflow-scroll">
      <div class="w-full h-5 flex items-center justify-center">
        <div class="w-1 h-1 bg-black rounded-full mr-1"></div>
        <div class="w-1 h-1 bg-black rounded-full mr-1"></div>
        <div class="w-1 h-1 bg-black rounded-full"></div>
      </div>
      <div class="lg:rounded-xl grow w-full bg-white z-10 border-solid border-red-900 border-2 overflow-auto p-2">
        <h1 class="font-swap">Salmagnis <span>#001</span></h1>
        <img class="my-4" src="https://www.pokewiki.de/images/thumb/6/63/Sugimori_902.png/250px-Sugimori_902.png" alt="">
        <p class="font-roboto mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat. Ut vitae, velit, consequatur deleniti, placeat ducimus accusantium quos quisquam numquam sapiente consequuntur quam similique delectus labore. Deleniti, iure vel?</p>
        <div class="w-full flex flex-row mb-2">
          <div class="w-2/5 p-4 border-2 border-solid border-red-900 uppercase font-swap bg-red-900 text-white">Typ</div>
          <div class="w-3/5 p-4 border-2 border-solid border-red-900 font-swap">Gift</div>
        </div>
        <div class="w-full flex flex-row">
          <div class="w-2/5 p-4 border-2 border-solid border-red-900 uppercase font-swap bg-red-900 text-white">Kategorie</div>
          <div class="w-3/5 p-4 border-2 border-solid border-red-900 font-swap">Fisch</div>
        </div>
      </div>
    </div>
<!--    <div class="w-full h-14 mt-3 flex flex-row justify-between items-center">-->
<!--      <div class="flex flex-row items-center ml-5">-->
<!--        <div class="lense relative w-12 aspect-square bg-white rounded-full"></div>-->
<!--        <div class="lense-small lense-red relative w-5 aspect-square bg-white rounded-full ml-5"></div>-->
<!--        <div class="lense-small lense-green relative w-5 aspect-square bg-white rounded-full ml-5"></div>-->
<!--      </div>-->
<!--      <div class="flex">-->
<!--        <div class="h-12 w-12 p-2 bg-gray-100 text-center rounded decal mr-5">-->
<!--          <svg fill="transparent" class="h-full mx-auto fill-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-ember-extension="1">-->
<!--            <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />-->
<!--          </svg>-->
<!--        </div>-->
<!--        <div class="h-12 w-12 p-2 bg-gray-100 text-center rounded decal">-->
<!--          <svg fill="transparent" class="h-full mx-auto fill-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-ember-extension="1">-->
<!--            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />-->
<!--          </svg>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex flex-col mr-5 w-64 ml-5">-->
<!--        <div class="decal w-full h-2 bg-gray-100 rounded-full mb-2"></div>-->
<!--        <div class="decal w-full h-2 bg-gray-100 rounded-full mb-2"></div>-->
<!--        <div class="decal w-full h-2 bg-gray-100 rounded-full"></div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style></style>
