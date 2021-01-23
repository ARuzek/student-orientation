<template>
  <div v-editable="blok" class="pb-8 mb-6 text-left">
    <section v-if="isPage0">
      <img
        v-if="blok.imageOnPage0.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage0.filename"
      />
      <div v-for="blok in blok.textOnPage0" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage1">
      <img
        v-if="blok.imageOnPage1.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage1.filename"
      />
      <div v-for="blok in blok.textOnPage1" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage2">
      <img
        v-if="blok.imageOnPage2.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage2.filename"
      />
      <div v-for="blok in blok.textOnPage2" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage3">
      <img
        v-if="blok.imageOnPage3.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage3.filename"
      />
      <div v-for="blok in blok.textOnPage3" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage4">
      <img
        v-if="blok.imageOnPage4.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage4.filename"
      />
      <div v-for="blok in blok.textOnPage4" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
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
      default: 'Principles',
    },
  },
  computed: {
    // isPage computations find the page of content that should display based on 1. whichPage we're displaying content on and 2. whether the checkbox for the content page is checked
    isPage0() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page0
    },
    isPage1() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page1
    },
    isPage2() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page2
    },
    isPage3() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page3
    },
    isPage4() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page4
    },
  },
}
</script>
<style scoped>
section img {
  margin: 0 auto;
}
</style>
