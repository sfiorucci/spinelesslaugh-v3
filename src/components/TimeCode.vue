<template>
  <span class="text-slate-800 font-medium">{{ time }}</span>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    }
  }
}
</script>