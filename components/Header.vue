<template>
  <header class="max-w-5xl mx-auto py-8 flex items-center">
    <div class="content-start">
      <a href="/" class="block w-56 mx-auto">
        <img
          src="https://a.storyblok.com/f/98561/x/d36d4c52a8/logo-stillirise.svg"
        />
      </a>
    </div>
    <div class="flex">
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
        />
      </a>
    </div>
  </header>
</template>
<style scoped>
.button {
  background-color: #ec7026;
}
header {
  justify-content: space-between;
}
</style>
