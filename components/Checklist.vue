/* eslint-disable vue/no-template-shadow */
<template>
  <ul v-editable="blok" class="flex flex-col mb-6">
    <li
      v-for="(blok, index) in blok.list"
      :key="blok._uid"
      class="flex-auto px-6"
    >
      <component
        :is="blok.component"
        :which-page="whichPage"
        :which-item="index"
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
    },
  },
}
</script>
