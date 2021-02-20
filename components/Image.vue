<template>
  <img
    :alt="blok.description"
    class="h-60 w-40 mb-4"
    :src="blok.image.filename"
  />
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
