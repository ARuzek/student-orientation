/* eslint-disable vue/no-template-shadow */
<template>
  <ul v-editable="blok" class="flex flex-col mb-6 w-60 desktop-only">
    <li
      v-for="(blok, index) in blok.list"
      :key="blok._uid"
      class="flex-auto px-6"
    >
      <component
        :is="blok.component"
        :which-page="whichPage"
        :which-item="index"
        :is-checked="areAnyChecked(index)"
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
    whichPage: {
      type: String,
      required: true,
      default: 'unknown',
    },
  },

  methods: {
    // when a list item is checked, the page with the list on it is updated in the Vuex store database
    areAnyChecked(index) {
      const page = 'get' + this.whichPage
      const item = 'page' + index
      const pageitem = this.$store.getters[page]
      return pageitem(item)
    },
  },
}
</script>
<style scoped>
@media only screen and (max-width: 640px) {
  .desktop-only {
    display: none;
  }
}
</style>
