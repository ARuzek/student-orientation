/* eslint-disable vue/no-template-shadow */
<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-4xl">{{ blok.headline }}</h1>
    <nav class="max-w-2xl m-auto">
      <ul v-editable="blok">
        <li v-for="blok in blok.list" :key="blok._uid">
          <component :is="blok.component" :blok="blok" />
        </li>
      </ul>
    </nav>
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
}
</script>
<style scoped>
li {
  background: #f4f4f4;
  border-radius: 8px;
  opacity: 1;
  padding: 1rem 0rem;
  margin: 1rem;
}
</style>
