<template>
  <button class="font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm" :class="category === label ? [ textColor, '!bg-white'] : 'text-slate-500'" @click="selectCategory">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: "text-slate-800"
    },
    category: {
      type: String,
      required: true
    },
  },
  methods: {
    selectCategory() {
      this.$emit("selectcategory", this.label)
    }
  }
};
</script>