/* eslint-disable vue/no-template-shadow */
<template>
  <div v-editable="blok" class="px-6">
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :ref="getNameOfPage"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  provide() {
    return {
      getNameOfPage: this.getNameOfPage,
    }
  },
  computed: {
    getNameOfPage() {
      return this.$parent.story.name
    },
  },
}
</script>
