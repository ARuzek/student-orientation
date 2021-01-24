<template>
  <header class="mx-auto py-8 flex items-center">
    <div class="content-start pl-8">
      <a href="/" class="block w-56 mx-auto">
        <img
          src="https://a.storyblok.com/f/98561/x/d36d4c52a8/logo-stillirise.svg"
        />
      </a>
    </div>
    <div class="flex pr-8">
      <a href="/">
        <img
          class="button m-2 w-12 h-9 p-2 rounded-lg"
          src="/icons/language-white-48dp.svg"
          alt="change language"
        />
      </a>
      <a href="/">
        <img
          class="button m-2 w-12 h-9 p-2 rounded-lg"
          src="/icons/volume_up-white-48dp.svg"
          alt="listen to audio"
          :class="{ move: clicked }"
          @click.prevent="audioShown"
        />
      </a>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    audioShown() {
      this.clicked = !this.clicked
    },
  },
}
</script>
<style scoped>
.button {
  background-color: #ec7026;
}
header {
  justify-content: space-between;
  margin-right: 0;
  transition: margin-right 300ms;
}
.move {
  margin-right: calc(300px - 1.25rem);
  transition: margin-right 300ms;
}
</style>
