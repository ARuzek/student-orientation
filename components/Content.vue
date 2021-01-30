<template>
  <div v-editable="blok" class="pb-8 pl-8 pr-8 mb-6">
    <section
      v-if="isPage0"
      :class="{
        hidden: isPage1 || isPage2 || isPage3 || isPage4 || isPage5 || isPage6,
      }"
    >
      <img
        v-if="blok.imageOnPage0.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage0.filename"
      />
      <div v-for="blok in blok.textOnPage0" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section
      v-if="isPage1"
      :class="{ hidden: isPage2 || isPage3 || isPage4 || isPage5 || isPage6 }"
    >
      <img
        v-if="blok.imageOnPage1.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage1.filename"
      />
      <div v-for="blok in blok.textOnPage1" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section
      v-if="isPage2"
      :class="{ hidden: isPage3 || isPage4 || isPage5 || isPage6 }"
    >
      <img
        v-if="blok.imageOnPage2.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage2.filename"
      />
      <div v-for="blok in blok.textOnPage2" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage3" :class="{ hidden: isPage4 || isPage5 || isPage6 }">
      <img
        v-if="blok.imageOnPage3.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage3.filename"
      />
      <div v-for="blok in blok.textOnPage3" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
    </section>
    <section v-if="isPage4" :class="{ hidden: isPage5 || isPage6 }">
      <img
        v-if="blok.imageOnPage4.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage4.filename"
      />
      <div v-for="eachblok in blok.textOnPage4" :key="eachblok._uid">
        <component :is="eachblok.component" :blok="eachblok" />
      </div>
    </section>
    <section v-if="isPage5" :class="{ hidden: isPage6 }">
      <img
        v-if="blok.imageOnPage5.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage5.filename"
      />
      <div v-for="eachblok in blok.textOnPage5" :key="eachblok._uid">
        <component :is="eachblok.component" :blok="eachblok" />
      </div>
    </section>
    <section v-if="isPage6">
      <img
        v-if="blok.imageOnPage6.filename"
        class="h-60 w-40 mb-4"
        :src="blok.imageOnPage6.filename"
      />
      <div v-for="eachblok in blok.textOnPage6" :key="eachblok._uid">
        <component :is="eachblok.component" :blok="eachblok" />
      </div>
    </section>
    <nuxt-link v-if="isPage4" :to="to"
      >hi
      <p>{{ blok.nextbutton }}</p></nuxt-link
    >
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
    to() {
      switch (this.whichPage) {
        case 'Principles':
          return '../rules'
        case 'Rules':
          return '../health'
        case 'Health':
          return '../complete'
        // code block
      }
      return true
    },
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
    isPage5() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page5
    },
    isPage6() {
      // eslint-disable-next-line dot-notation
      return this.$store.state[this.whichPage].page6
    },
  },
}
</script>
<style scoped>
section img {
  margin: 0 auto;
}
</style>
