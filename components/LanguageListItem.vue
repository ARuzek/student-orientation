<template>
  <div>
    <dialog :ref="blok.language" class="m-auto">
      <div class="flex justify-center items-center flex-col flex-grow">
        <h2 class="text-5xl font-bold pb-8">
          {{ blok.language }}
        </h2>
        <menu class="p-0 flex flex-row justify-center">
          <a
            class="button m-2 w-12 h-9 p-2 rounded-lg"
            @click.prevent="$refs[blok.language].close()"
            >{{ blok.no }}</a
          >
          <nuxt-link
            class="button m-2 w-12 h-9 p-2 rounded-lg"
            :to="blok.page"
            @click.native="blok.rtl ? isRtl() : isLtr()"
            >{{ blok.yes }}</nuxt-link
          >
        </menu>
      </div>
    </dialog>
    <a
      v-editable="blok"
      class="flex items-center"
      @click.prevent="$refs[blok.language].showModal()"
    >
      <audio controls class="hidden">
        <source :src="blok.audio.filename" />
        Your browser does not support the audio element.
      </audio>
      <img
        class="button ml-3 w-12 h-9 p-2 rounded-lg"
        src="/icons/volume_up-white-48dp.svg"
        alt="listen to audio"
      />
      <p :class="{ rtl: blok.rtl }" class="flex-grow text-left pl-6">
        {{ blok.language }}
      </p>
      <img
        class=""
        src="/icons/keyboard_arrow_right-black-48dp.svg"
        alt="Continue in this language"
      />
    </a>
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
  methods: {
    isRtl() {
      this.$store.commit({
        type: 'setRtl',
        isRtl: true,
      })
    },
    isLtr() {
      this.$store.commit({
        type: 'setRtl',
        isRtl: false,
      })
    },
  },
}
</script>
<style scoped>
.button {
  background-color: #ec7026;
}
.rtl {
  direction: rtl;
  text-align: right;
}
dialog::backdrop {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
}
dialog {
  width: 100vw;
  max-width: 500px;
}
</style>
