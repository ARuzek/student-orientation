<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link class="text-teal-600 hover:underline" to="/en/">
            I speak English
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="text-teal-600 hover:underline" to="/ar/">
            I speak Arabic
          </nuxt-link>
        </li>
      </ul>
    </nav>
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
