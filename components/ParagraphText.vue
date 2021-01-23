<template>
  <p v-editable="blok" class="mb-3 text-left">
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
