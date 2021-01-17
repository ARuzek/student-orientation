<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/en/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="listen to audio"
            />
            <p class="flex-grow text-left pl-6">I speak English</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Continue in English"
            />
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
li {
  background: #f4f4f4;
  border-radius: 8px;
  opacity: 1;
  padding: 1rem 0rem;
  margin: 1rem;
}
.button {
  background-color: #ec7026;
}
</style>
