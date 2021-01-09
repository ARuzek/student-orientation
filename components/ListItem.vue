<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold">
    <label>
      <input type="checkbox" name="item" value="item" />
      {{ blok.text }}
    </label>
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
