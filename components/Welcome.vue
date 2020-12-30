<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <div id="vrview"></div>
  </div>
</template>

<script>
import 'vrview/build/vrview'
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
      const vrview = new VRView.Player('#vrview', {
        image: this.block.vrImage.filename,
      })
      // eslint-disable-next-line no-console
      console.log(vrview)
    },
  },
}
</script>
