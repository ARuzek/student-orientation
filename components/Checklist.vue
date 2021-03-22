/* eslint-disable vue/no-template-shadow */
<template>
  <ul v-editable="blok" class="flex flex-col mb-6 mt-40 desktop-only">
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
  mounted() {
    if (window.innerWidth < 640) {
      console.log('mounted in a small screen')
      const page = 'set' + this.whichPage
      this.$store.commit({
        type: page,
        itemIndex: 'page0',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page1',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page2',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page3',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page4',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page5',
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: 'page6',
        isChecked: true,
      })
    }
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
