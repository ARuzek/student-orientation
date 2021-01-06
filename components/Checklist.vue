<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold">
    <ul>
      <li>{{ blok.checklist1 }}</li>
      <li>{{ blok.checklist2 }}</li>
      <li>{{ blok.checklist3 }}</li>
      <li>{{ blok.checklist4 }}</li>
      <li>{{ blok.checklist5 }}</li>
    </ul>
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
section p {
  white-space: pre;
}
</style>
