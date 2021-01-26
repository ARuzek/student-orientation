<template>
  <p v-editable="blok" class="mb-3">
    {{ blok.text }}
  </p>
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
