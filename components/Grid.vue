/* eslint-disable vue/no-template-shadow */
<template>
  <ul v-editable="blok" class="flex py-8 mb-6">
    <li v-for="blok in blok.columns" :key="blok._uid" class="flex-auto px-6">
      <component
        :is="blok.component"
        :which-page="getNameOfPage"
        :blok="blok"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    changeDetected: Boolean,
  },
  computed: {
    getNameOfPage() {
      // This lets me grab the name of the page and pass it down to the grid's children
      return Object.getOwnPropertyNames(this.$parent.$refs)[0]
    },
  },
}
</script>
