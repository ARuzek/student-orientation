<template>
  <div v-editable="blok" class="pb-8 mb-6">
    <label>
      <input v-model="itemChecked" type="checkbox" name="item" value="item" />
      <img
        v-show="!itemChecked"
        src="/icons/check_box_outline_blank-black-48dp.svg"
        alt="checkbox"
      />
      <img
        v-show="itemChecked"
        src="/icons/check_box-black-48dp.svg"
        alt="checkbox"
      />
      {{ blok.text }}
    </label>
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
      itemChecked: false,
    }
  },
}
</script>
<style scoped>
div {
  background: #f4f4f4;
  border-radius: 8px;
  opacity: 1;
  padding: 1rem 0rem;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
}
img {
  height: 27px;
  width: 27px;
  margin-right: 1rem;
}
input {
  height: 0px;
  width: 0px;
}
</style>
