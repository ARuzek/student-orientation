<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <div id="vrview"></div>
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

    // function onVrViewLoad() {
    //   // Selector '#vrview' finds element with id 'vrview'.
    //   // eslint-disable-next-line no-undef
    //   const vrView = new VRView.Player('#vrview', {
    //     image: this.blok.vrImage.filename,
    //   })
    //   // eslint-disable-next-line no-console
    //   console.log(vrView)
    // }
  },
  methods: {
    onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      // eslint-disable-next-line no-undef
      const vrView = new VRView.Player('#vrview', {
        image: this.blok.vrImage.filename,
      })
      // eslint-disable-next-line no-console
      console.log(vrView)
    },
  },
}
</script>
