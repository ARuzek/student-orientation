<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <section v-if="isPage0">
      <p>{{ blok.text }}</p>
      <ul>
        <li>{{ blok.listitem1 }}</li>
        <li>{{ blok.listitem2 }}</li>
        <li>{{ blok.listitem3 }}</li>
        <li>{{ blok.listitem4 }}</li>
      </ul>
    </section>
    <section v-else>
      <p>The other page</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    // whichPage returns the name of the page on which Content exists. This comes from the parent component.
    whichPage: {
      type: String,
      required: true,
      default: 'unknown',
    },
  },
  data() {
    return {
      thisPage: this.whichPage,
    }
  },
  computed: {
    // isPage computations find the page of content that should display based on 1. whichPage we're displaying content on and 2. whether the checkbox for the content page is checked
    isPage0() {
      const thisPage = this.whichPage
      let ofThisPage = 'Principles' // sets up default fall back
      ofThisPage = thisPage
      // eslint-disable-next-line dot-notation
      const { page0 } = this.$store.state[ofThisPage]
      console.log(page0)
      // console.log(ofThatPage)
      return this.$store.state.Principles.page0
    },
  },
}
</script>
<style scoped>
section p {
  white-space: pre;
}
</style>
