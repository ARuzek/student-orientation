<template>
  <!-- <div
    v-editable="blok"
    class="flex items-center"
    @click.prevent="dialogOpen = true"
  > -->
  <nuxt-link
    v-editable="blok"
    class="flex items-center"
    :to="blok.page"
    @click.native="blok.rtl ? isRtl : isLtr"
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
    <dialog open :class="{ hidden: !dialogOpen }" class="m-auto">
      <form>
        <p>
          {{ blok.language }}
        </p>
        <menu>
          <nuxt-link :to="blok.page" @click.native="blok.rtl ? isRtl : isLtr">{{
            blok.yes
          }}</nuxt-link>
          <button @click.prevent="dialogOpen = false">{{ blok.no }}</button>
        </menu>
      </form>
    </dialog>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogOpen: false,
    }
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
  background: rgba(0, 0, 0, 0.1);
}
</style>
