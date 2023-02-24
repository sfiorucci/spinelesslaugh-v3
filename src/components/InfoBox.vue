<template>
  <div :class="borderColor" class="max-w-2xl mx-auto border-4 rounded-3xl bg-slate-50 px-10 py-8 mt-12 md:mt-16">
    <div class="flex justify-between">
      <h3 class="text-2xl md:text-3xl font-extrabold font-hkgrotesk mb-6">{{ title }}</h3>
      <i :class="icon"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "text-slate-800"
    },
    borderColor: {
      type: String,
      default: "border-slate-500"
    },
  }
}
</script>