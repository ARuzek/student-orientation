<template>
  <div v-editable="blok" class="pb-8 mb-6 font-bold text-center">
    <h2 class="text-base">{{ blok.subheadline }}</h2>
    <h1 class="text-5xl">{{ blok.headline }}</h1>
    <section>
      <p>{{ blok.text }}</p>
      <ul>
        <li>{{ blok.listitem1 }}</li>
        <li>{{ blok.listitem2 }}</li>
        <li>{{ blok.listitem3 }}</li>
        <li>{{ blok.listitem4 }}</li>
      </ul>
    </section>
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
  // data() {
  //   return {
  //     page1: this.isPage1,
  //   }
  // },
  // computed: {
  //   isPage1() {
  //     const isChecked = document.getElementsByTagName('input')[0].checked
  //     return isChecked
  //   },
  // },
}
</script>
<style scoped>
section p {
  white-space: pre;
}
</style>
