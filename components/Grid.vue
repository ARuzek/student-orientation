/* eslint-disable vue/no-template-shadow */
<template>
  <ul v-editable="blok" class="flex py-8 mb-6">
    <li v-for="blok in blok.columns" :key="blok._uid" class="flex-auto">
      <component :is="blok.component" :which-page="nameOfPage" :blok="blok" />
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['getNameOfPage'],
  props: {
    blok: {
      type: Object,
      required: true,
    },
    changeDetected: Boolean,
  },
  computed: {
    nameOfPage() {
      // This lets me grab the name of the page and pass it down to the grid's children
      // return Object.getOwnPropertyNames(this.$parent.$refs)[0]
      // return this.$parent.$computed.getNameOfPage()
      return this.getNameOfPage
    },
  },
}
</script>
