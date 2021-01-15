<template>
  <div v-editable="blok" class="pb-8 mb-6 text-center">
    <h2 class="text-base font-bold">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl font-bold">{{ blok.headline }}</h1>
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
div {
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
