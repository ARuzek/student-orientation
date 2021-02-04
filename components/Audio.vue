<template>
  <div :class="{ invisible: !$store.state.audio }" v-editable="blok">
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
<style scoped>
div {
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  background-color: #ec7026;
  border-radius: 0.5rem;
}
audio {
  width: 300px;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #ec7026;
  transform: scale(0.9);
}
</style>
