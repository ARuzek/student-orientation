<template>
  <div v-editable="blok" :class="{ invisible: !$store.state.audio }">
    <audio :ref="blok.audio.title">
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
  computed: {
    audio() {
      return this.$store.state.audio
    },
  },
  watch: {
    audio(newValue, oldValue) {
      if (newValue === true) {
        this.$refs[this.blok.audio.title].play()
      } else {
        this.$refs[this.blok.audio.title].pause()
      }
    },
  },
}
</script>

<style scoped>
@media only screen and (max-width: 640px) {
  div {
    position: absolute;
    top: 5.5rem;
    right: 2rem;
    background-color: #ec7026;
    border-radius: 0.5rem;
  }
}
@media only screen and (min-width: 641px) {
  div {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    background-color: #ec7026;
    border-radius: 0.5rem;
  }
}
audio {
  width: 300px;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #ec7026;
  transform: scale(0.9);
}

audio:focus {
  outline: none;
  border: none;
}
</style>
