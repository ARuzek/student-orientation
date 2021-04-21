<template>
  <div class="p-0 flex flex-row justify-between">
    <nuxt-link
      :to="from"
      class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
    >
      <img
        class="inline"
        src="/icons/keyboard_arrow_left-white-48dp.svg"
        alt="Previous Page"
      />
      <strong>{{ blok.previousbutton }}</strong>
    </nuxt-link>

    <nuxt-link
      :to="to"
      class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
    >
      <strong>{{ blok.nextbutton }}</strong>
      <img
        class="inline"
        src="/icons/keyboard_arrow_right-white-48dp.svg"
        alt="Next Page"
      />
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
    to() {
      switch (this.getNameOfPage) {
        case 'Principles':
          return '../rules'
        case 'Rules':
          return './health'
        case 'Health':
          return './complete'
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
