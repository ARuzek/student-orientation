<template>
  <div v-editable="blok" class="pb-8 pl-8 pr-8 mb-6 text-center">
    <h2 class="text-base font-bold text-center">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl font-bold text-center">{{ blok.headline }}</h1>
    <div class="vrview"><div id="vrview"></div></div>
    <p class="text-left mb-6 mt-6 max-w-5xl mx-auto">{{ blok.mission }}</p>
    <p class="text-left mb-6 max-w-5xl mx-auto">
      {{ blok.interaction_instruction }}
    </p>
    <p class="text-left mb-6 max-w-5xl mx-auto">{{ blok.audio_instruction }}</p>
    <h1 class="text-5xl font-bold mb-6 max-w-5xl mx-auto">{{ blok.prompt }}</h1>
    <a class="text-white button ml-3 w-12 h-9 p-4 rounded-lg">{{
      blok.button_previous
    }}</a>
    <a
      href="./principles/"
      class="text-white button ml-3 w-12 h-9 p-4 rounded-lg"
      >{{ blok.button_next }}</a
    >
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
    this.onVrViewLoad()
  },
  methods: {
    onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      // eslint-disable-next-line no-undef
      const vrView = new VRView.Player('#vrview', {
        image: this.blok.vrImage.filename,
        width: '500px',
        height: '500px',
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
#vrview {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
