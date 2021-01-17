<template>
  <div v-editable="blok" class="pb-8 mb-6 text-center">
    <h2 class="text-base font-bold">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl font-bold">{{ blok.headline }}</h1>
    <div id="vrview"></div>
    <p class="text-left">{{ blok.mission }}</p>
    <p class="text-left">{{ blok.interaction_instruction }}</p>
    <p class="text-left">{{ blok.audio_instruction }}</p>
    <h1 class="text-5xl font-bold">{{ blok.prompt }}</h1>
    <a class="text-white button ml-3 w-12 h-9 p-2 rounded-lg">{{
      blok.button_previous
    }}</a>
    <a class="text-white button ml-3 w-12 h-9 p-2 rounded-lg">{{
      blok.button_next
    }}</a>
  </div>
</template>

<script>
if (process.client) {
  require('../plugins/vrview.min.js')
}
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    window.addEventListener('load', this.onVrViewLoad)
  },
  methods: {
    onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      // eslint-disable-next-line no-undef
      const vrView = new VRView.Player('#vrview', {
        image: this.blok.vrImage.filename,
        width: '100%',
      })
      // eslint-disable-next-line no-console
      console.log(vrView)
    },
  },
}
</script>
<style scoped>
.button {
  background-color: #ec7026;
}
</style>
