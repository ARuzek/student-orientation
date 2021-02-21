<template>
  <nuxt-link :to="to" class="button w-12 h-9 py-2 px-20 text-center rounded-lg">
    {{ blok.nextbutton }}
  </nuxt-link>
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
          return '../complete'
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
