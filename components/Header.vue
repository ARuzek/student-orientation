<template>
  <header class="mx-auto py-8 flex items-center w-screen">
    <div class="content-start pl-8">
      <a href="/" class="block w-24 mx-auto sm:w-56">
        <img src="/logo-stillirise.svg" alt="Still I Rise Logo" />
      </a>
    </div>
    <div class="flex pr-8" :class="{ hidden: $route.path == '/' }">
      <a href="/">
        <img
          class="button m-2 w-12 h-9 p-2 rounded-lg"
          src="/icons/language-white-48dp.svg"
          alt="change language"
          height="2.25rem"
          width="3rem"
        />
      </a>
      <a v-if="this.$store.state.audio" href="/">
        <img
          class="button m-2 w-12 h-9 p-2 rounded-lg"
          src="/icons/volume_up-white-48dp.svg"
          alt="listen to audio"
          height="2.25rem"
          width="3rem"
          @click.prevent="audioShown"
        />
      </a>
      <a v-else href="/">
        <img
          class="button m-2 w-12 h-9 p-2 rounded-lg"
          src="/icons/volume_off-white-48dp.svg"
          alt="listen to audio"
          height="2.25rem"
          width="3rem"
          @click.prevent="audioShown"
        />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    audioShown() {
      this.$store.commit({
        type: 'setAudio',
      })
    },
  },
}
</script>
<style scoped>
.button {
  background-color: #ec7026;
}

.button:hover {
  background-color: #c55d21;
}

header {
  justify-content: space-between;
  margin-right: 0;
}
</style>
