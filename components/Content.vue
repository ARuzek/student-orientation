<template>
  <div
    v-editable="blok"
    class="pb-8 pl-8 pr-8 mb-6 max-w-screen-md my-0 mx-auto"
  >
    <section
      v-if="isPage0"
      :class="{
        'md:hidden':
          isPage1 || isPage2 || isPage3 || isPage4 || isPage5 || isPage6,
      }"
    >
      <div v-for="blok in blok.titleOnPage0" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage0 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage0.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage0.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage0" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="isPage1"
      :class="{
        'md:hidden': isPage2 || isPage3 || isPage4 || isPage5 || isPage6,
      }"
    >
      <div v-for="blok in blok.titleOnPage1" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage1 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage1.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage1.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage1" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="isPage2"
      :class="{ 'md:hidden': isPage3 || isPage4 || isPage5 || isPage6 }"
    >
      <div v-for="blok in blok.titleOnPage2" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage2 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage2.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage2.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage2" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="isPage3"
      :class="{ 'md:hidden': isPage4 || isPage5 || isPage6 }"
    >
      <div v-for="blok in blok.titleOnPage3" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage3 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage3.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage3.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage3" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="isPage4"
      class="flex flex-col"
      :class="{ 'md:hidden': isPage5 || isPage6 }"
    >
      <div v-for="blok in blok.titleOnPage4" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage4 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage4.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage4.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage4" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section v-if="isPage5" :class="{ 'md:hidden': isPage6 }">
      <div v-for="blok in blok.titleOnPage5" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage5 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage5.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage5.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage5" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
      </div>
    </section>
    <section v-if="isPage6" class="flex flex-col">
      <div v-for="blok in blok.titleOnPage6" :key="blok._uid">
        <component :is="blok.component" :blok="blok" />
      </div>
      <div
        class="flex items-center"
        :class="
          blok.layoutImageOnPage6 ? 'sm: flex-col lg:flex-row' : 'flex-col'
        "
      >
        <img
          v-if="blok.imageOnPage6.filename"
          class="sm-h-60 sm-w-40 lg-w-100 m-4"
          :src="blok.imageOnPage6.filename"
        />
        <div class="flex-grow">
          <div v-for="blok in blok.textOnPage6" :key="blok._uid">
            <component :is="blok.component" :blok="blok" />
          </div>
        </div>
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
/* section img {
  margin: 0 auto;
} */
nuxt-link {
  background-color: #ec7026;
}
.center:last-of-type {
  margin: 0 auto;
}
</style>
