<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <nav class="max-w-2xl m-auto">
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
          <nuxt-link
            class="flex items-center"
            to="/fa/"
            @click.native="isRtl()"
          >
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="گوش کن"
            />
            <p class="flex-grow text-right pl-6 ltr">من فارسی صحبت می کنم</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="من فارسی صحبت می کنم"
            />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="flex items-center" to="/tr/">
            <img
              class="button ml-3 w-12 h-9 p-2 rounded-lg"
              src="/icons/volume_up-white-48dp.svg"
              alt="dinlemek"
            />
            <p class="flex-grow text-left pl-6">Ben türkçe konuşuyorum</p>
            <img
              class=""
              src="/icons/keyboard_arrow_right-black-48dp.svg"
              alt="Ben türkçe konuşuyorum"
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
  methods: {
    isRtl() {
      // eslint-disable-next-line no-console
      console.log('it works')
      this.$store.commit({
        type: 'setRtl',
        isRtl: true,
      })
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
.ltr {
  direction: ltr;
}
</style>
