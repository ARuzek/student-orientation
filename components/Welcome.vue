<template>
  <div v-editable="blok" class="pb-8 pl-8 pr-8 mb-6" :dir="isRtl()">
    <h2 class="text-base font-bold text-center">{{ blok.subheadline }}</h2>
    <h1 class="text-4xl font-bold text-center">{{ blok.headline }}</h1>
    <div class="vrview"><div id="vrview"></div></div>
    <p class="mb-6 mt-6 max-w-5xl mx-auto">{{ blok.mission }}</p>
    <p class="mb-6 max-w-5xl mx-auto">
      {{ blok.interaction_instruction }}
    </p>
    <img
      class="object-center bg-white"
      src="/animations/HowToNext_1_1.gif"
      alt="example of how to select the next checkbox"
    />
    <p class="mb-6 max-w-5xl mx-auto">{{ blok.audio_instruction }}</p>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-6 max-w-5xl mx-auto">
        {{ blok.prompt }}
      </h1>

      <a class="text-xl text-white button ml-3 w-12 h-9 p-2 rounded-lg"
        ><strong>{{ blok.button_previous }}</strong></a
      >
      <a
        href="./principles/"
        class="text-xl text-white button ml-3 w-12 h-9 p-2 rounded-lg"
        ><strong>{{ blok.button_next }}</strong></a
      >
    </div>
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
    isRtl() {
      if (this.$store.state.rtl) {
        return 'rtl'
      } else {
        return 'ltr'
      }
    },

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

img {
  width: 500px;
}
</style>
