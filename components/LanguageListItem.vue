<template>
  <div>
    <dialog v-if="dialogSupported" :ref="blok.language" class="m-auto">
      <div class="flex justify-center items-center flex-col flex-grow">
        <h2 class="text-3xl font-bold pb-8">
          {{ blok.language }}
        </h2>
        <menu class="p-0 flex flex-row justify-center">
          <a
            class="cta button m-2 h-9 text-white rounded-lg"
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

    <a
      v-if="dialogSupported"
      v-editable="blok"
      class="flex items-center"
      @click.prevent="checkForDialogSupport($refs[blok.language])"
    >
      <audio :ref="blok.language + ' audio'" class="hidden">
        <source :src="blok.audio.filename" />
        Your browser does not support the audio element.
      </audio>
      <audio :ref="blok.language + ' yes audio'" class="hidden">
        <source src="/audio/EN_Yes.mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio :ref="blok.language + ' no audio'" class="hidden">
        <source src="/audio/EN_No.mp3" />
        Your browser does not support the audio element.
      </audio>
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
        alt="Select this language"
      />
    </a>
    <nuxt-link
      v-else
      v-editable="blok"
      :to="blok.page"
      class="flex items-center"
      @click.prevent="blok.rtl ? isRtl() : isLtr()"
    >
      <audio :ref="blok.language + ' audio'" class="hidden">
        <source :src="blok.audio.filename" />
        Your browser does not support the audio element.
      </audio>
      <audio :ref="blok.language + ' yes audio'" class="hidden">
        <source src="/audio/EN_Yes.mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio :ref="blok.language + ' no audio'" class="hidden">
        <source src="/audio/EN_No.mp3" />
        Your browser does not support the audio element.
      </audio>
      <nuxt-img
        width="48"
        height="36"
        class="button ml-3 p-2 rounded-lg"
        src="/icons/volume_up-white-48dp.svg"
        alt="listen to audio"
        @click.prevent="$refs[blok.language + ' audio'].play()"
      />
      <p :class="{ rtl: blok.rtl }" class="flex-grow text-left pl-6">
        {{ blok.language }}
      </p>
      <nuxt-img
        height="36"
        width="36"
        src="/icons/keyboard_arrow_right-black-48dp.svg"
        alt="Select this language"
      />
    </nuxt-link>
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
  data() {
    return {
      dialogSupported: true,
    }
  },
  mounted() {
    try {
      this.$refs[this.blok.language].close()
      this.dialogSupported = true
    } catch {
      console.log('dialog is not supported')
      this.dialogSupported = false
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
    checkForDialogSupport(langaugeSelection) {
      try {
        langaugeSelection.showModal()
      } catch {
        console.log('dialog is not supported')
        this.dialogSupported = false
      }
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
img[alt='Do Not Continue in this language'] {
  margin-left: -20px;
}
img[alt='Continue in this language'] {
  margin-right: -20px;
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
