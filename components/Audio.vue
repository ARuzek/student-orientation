<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h1>hi audio</h1>
    <audio controls>
      <source :src="blok.audio.filename" />
      Your browser does not support the audio element.
    </audio>
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
