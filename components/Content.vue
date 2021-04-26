<template>
  <div
    v-editable="blok"
    class="pb-8 pl-8 pr-8 mb-6 max-w-screen-md my-0 mx-auto"
  >
    <section v-if="onPage0()" class="mb-12">
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
      <div class="p-0 sm:hidden flex flex-row justify-between">
        <a class="text-xl button disabled h-9 pl-2 pr-6 text-center rounded-lg">
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_right-white-48dp.svg'
                : '/icons/keyboard_arrow_left-white-48dp.svg'
            "
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(0)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_left-white-48dp.svg'
                : '/icons/keyboard_arrow_right-white-48dp.svg'
            "
            alt="Next Page"
          />
        </a>
      </div>
    </section>
    <section v-if="onPage1()" class="mb-12">
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
      <div class="p-0 sm:hidden flex flex-row justify-between">
        <a
          class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
          @click.prevent="back(1)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_right-white-48dp.svg'
                : '/icons/keyboard_arrow_left-white-48dp.svg'
            "
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(1)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_left-white-48dp.svg'
                : '/icons/keyboard_arrow_right-white-48dp.svg'
            "
            alt="Next Page"
          />
        </a>
      </div>
    </section>
    <section v-if="onPage2()" class="mb-12">
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
      <div class="p-0 sm:hidden flex flex-row justify-between">
        <a
          class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
          @click.prevent="back(2)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_right-white-48dp.svg'
                : '/icons/keyboard_arrow_left-white-48dp.svg'
            "
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(2)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_left-white-48dp.svg'
                : '/icons/keyboard_arrow_right-white-48dp.svg'
            "
            alt="Next Page"
          />
        </a>
      </div>
    </section>
    <section v-if="onPage3()" class="mb-12">
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
      <div class="p-0 sm:hidden flex flex-row justify-between">
        <a
          class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
          @click.prevent="back(3)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_right-white-48dp.svg'
                : '/icons/keyboard_arrow_left-white-48dp.svg'
            "
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(3)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_left-white-48dp.svg'
                : '/icons/keyboard_arrow_right-white-48dp.svg'
            "
            alt="Next Page"
          />
        </a>
      </div>
    </section>
    <section v-if="onPage4()" class="flex flex-col mb-12">
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

      <!--If the you have more than 5 pages, uncomment this commented section-->
      <!-- <div class="p-0 sm:hidden flex flex-row justify-between">
        <a
          class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
          @click.prevent="back(4)"
        >
          <img
            class="inline"
            src="/icons/keyboard_arrow_left-white-48dp.svg"
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(4)"
        >
          <img
            class="inline"
            src="/icons/keyboard_arrow_right-white-48dp.svg"
            alt="Next Page"
          />
        </a>
      </div> -->
    </section>
    <section v-if="onPage5()" class="mb-12">
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
      <div class="p-0 sm:hidden flex flex-row justify-between">
        <a
          class="text-xl button h-9 pl-2 pr-6 text-center rounded-lg"
          @click.prevent="back(5)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_right-white-48dp.svg'
                : '/icons/keyboard_arrow_left-white-48dp.svg'
            "
            alt="Previous Page"
          />
        </a>

        <a
          class="text-xl button h-9 pr-2 pl-6 text-center rounded-lg"
          @click.prevent="next(5)"
        >
          <img
            class="inline"
            :src="
              this.$store.state.rtl
                ? '/icons/keyboard_arrow_left-white-48dp.svg'
                : '/icons/keyboard_arrow_right-white-48dp.svg'
            "
            alt="Next Page"
          />
        </a>
      </div>
    </section>
    <section v-if="onPage6()" class="mb-12 flex flex-col">
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
  methods: {
    onPage0() {
      if (
        !this.isPage1 &&
        !this.isPage2 &&
        !this.isPage3 &&
        !this.isPage4 &&
        !this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage1() {
      if (
        this.isPage1 &&
        !this.isPage2 &&
        !this.isPage3 &&
        !this.isPage4 &&
        !this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage2() {
      if (
        this.isPage1 &&
        this.isPage2 &&
        !this.isPage3 &&
        !this.isPage4 &&
        !this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage3() {
      if (
        this.isPage1 &&
        this.isPage2 &&
        this.isPage3 &&
        !this.isPage4 &&
        !this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage4() {
      if (
        this.isPage1 &&
        this.isPage2 &&
        this.isPage3 &&
        this.isPage4 &&
        !this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage5() {
      if (
        this.isPage1 &&
        this.isPage2 &&
        this.isPage3 &&
        this.isPage4 &&
        this.isPage5 &&
        !this.isPage6
      ) {
        return true
      }
      return false
    },
    onPage6() {
      if (
        this.isPage1 &&
        this.isPage2 &&
        this.isPage3 &&
        this.isPage4 &&
        this.isPage5 &&
        this.isPage6
      ) {
        return true
      }
      return false
    },
    // when a list item is checked, the page with the list on it is updated in the Vuex store database
    next(thisPage) {
      const nextPage = thisPage + 1
      const page = 'set' + this.whichPage
      const item = 'page' + nextPage
      this.$store.commit({
        type: page,
        itemIndex: item,
        isChecked: true,
      })
      return true
    },
    back(thisPage) {
      const previousPage = thisPage - 1
      const page = 'set' + this.whichPage
      const item = 'page' + previousPage
      const back = 'page' + thisPage
      this.$store.commit({
        type: page,
        itemIndex: item,
        isChecked: true,
      })
      this.$store.commit({
        type: page,
        itemIndex: back,
        isChecked: false,
      })
      return true
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
.button {
  background-color: #ec7026;
  color: white;
}

.disabled {
  background-color: #d1d1d1;
}
.center:last-of-type {
  margin: 0 auto;
}
</style>
