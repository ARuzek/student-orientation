<template>
  <div class="p-0 flex flex-row justify-between">
    <nuxt-link
      :to="from"
      class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
    >
      <img class="inline" :src="isLtr()" alt="Previous Page" />
      <strong class="hidden sm:inline">{{ blok.previousbutton }}</strong>
    </nuxt-link>

    <nuxt-link
      :to="to"
      class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
    >
      <strong class="hidden sm:inline">{{ blok.nextbutton }}</strong>
      <img class="inline" :src="isRtl()" alt="Next Page" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  inject: ['getNameOfPage'],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isRtl() {
      if (this.$store.state.rtl) {
        return '/icons/keyboard_arrow_right-white-48dp.svg'
      } else {
        return '/icons/keyboard_arrow_left-white-48dp.svg'
      }
    },

    isLtr() {
      if (this.$store.state.rtl) {
        return '/icons/keyboard_arrow_left-white-48dp.svg'
      } else {
        return '/icons/keyboard_arrow_right-white-48dp.svg'
      }
    },

    to() {
      switch (this.getNameOfPage) {
        case 'Principles':
          return '../rules'
        case 'Rules':
          return './health'
        case 'Health':
          return './complete/'
        // code block
      }
      return true
    },
    from() {
      switch (this.getNameOfPage) {
        case 'Principles':
          return '../'
        case 'Rules':
          return './principles'
        case 'Health':
          return './rules'
        // code block
      }
      return true
    },
  },
}
</script>

<style scoped>
.button {
  background-color: #ec7026;
  color: white;
}
</style>
