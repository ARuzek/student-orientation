<template>
  <div>
    <dialog :ref="blok.language" class="m-auto">
      <div class="flex justify-center items-center flex-col flex-grow">
        <h2 class="text-3xl font-bold pb-8">
          {{ blok.language }}
        </h2>
        <menu class="p-0 flex flex-row justify-center">
          <a
            class="cta button m-2 h-9 pl-2 pr-6 text-white rounded-lg"
            @click.prevent="$refs[blok.language].close()"
          >
            <img
              class="inline"
              src="/icons/keyboard_arrow_left-white-48dp.svg"
              alt="Do Not Continue in this language"
              @mouseover="$refs[blok.language + ' no audio'].play()"
            />
            {{ blok.no }}</a
          >
          <nuxt-link
            class="cta button m-2 h-9 pr-2 pl-6 text-white rounded-lg"
            :to="blok.page"
            @click.native="blok.rtl ? isRtl() : isLtr()"
            >{{ blok.yes }}
            <img
              class="inline"
              src="/icons/keyboard_arrow_right-white-48dp.svg"
              alt="Continue in this language"
              @mouseover="$refs[blok.language + ' yes audio'].play()"
            />
          </nuxt-link>
        </menu>
      </div>
    </dialog>

    <audio :ref="blok.language + ' audio'" class="hidden">
      <source :src="blok.audio.filename" />
      Your browser does not support the audio element.
    </audio>
    <audio :ref="blok.language + ' yes audio'" class="hidden">
      <source :src="blok.audio.filename" />
      Your browser does not support the audio element.
    </audio>
    <audio :ref="blok.language + ' no audio'" class="hidden">
      <source :src="blok.audio.filename" />
      Your browser does not support the audio element.
    </audio>
    <a
      v-editable="blok"
      class="flex items-center"
      @click.prevent="$refs[blok.language].showModal()"
    >
      <img
        class="button ml-3 w-12 h-9 p-2 rounded-lg"
        src="/icons/volume_up-white-48dp.svg"
        alt="listen to audio"
        @click.prevent="$refs[blok.language + ' audio'].play()"
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
.cta {
  min-width: 100px;
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

a:focus {
  outline: none;
  border: 2px solid #000000;
}
</style>
