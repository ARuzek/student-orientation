<template>
  <div v-editable="blok" class="pb-8 pl-8 pr-8 mb-6" :dir="isRtl()">
    <h2 class="text-base font-bold text-center">{{ blok.subheadline }}</h2>
    <h1 class="text-4xl font-bold text-center">{{ blok.headline }}</h1>
    <div class="sm:block hidden vrview"><div id="vrview"></div></div>
    <p class="mb-6 mt-6 max-w-5xl mx-auto">{{ blok.mission }}</p>
    <p class="mb-6 max-w-5xl mx-auto">
      {{ blok.interaction_instruction }}
    </p>
    <div>
      <img
        class="object-center bg-white"
        src="/animations/HowToNext.gif"
        alt="example of how to select the next checkbox"
      />
    </div>
    <p class="mb-6 max-w-5xl mx-auto">{{ blok.audio_instruction }}</p>
    <div>
      <img
        class=""
        src="/animations/HowToButton.gif"
        alt="example of how to select the next checkbox"
      />
    </div>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-6 max-w-5xl mx-auto">
        {{ blok.prompt }}
      </h1>

      <a href="./principles/" class="text-xl text-white button p-2 rounded-lg"
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
        width: '100%',
        height: '100%',
      })
      // eslint-disable-ext-line no-console
      console.log(vrView)
    },

    // this.vrView.on('ready',function(){
    //  this.vrView.addHotspot('dining-room', {
    //     pitch: 30, // In degrees. Up is positive.
    //     yaw: 20, // In degrees. To the right is positive.
    //     radius: 5, // Radius of the circular target in meters.
    //     distance: 2, // Distance of target from camera in meters.
    //   })
    // },
    //   vrView.on('click', function (event) {
    //     if (event.id === 'dining-room') {
    //       // Handle hotspot click.
    //       console.log('hotspot clicked')
    //     }
    //   })
  },
}
</script>
<style scoped>
.button {
  background-color: #ec7026;
}

#vrview {
  margin: 0 auto;
  width: 500px;
  height: 500px;
}

img {
  width: 500px;
  margin: 0 auto;
}
</style>
