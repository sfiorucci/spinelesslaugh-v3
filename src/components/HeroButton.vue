<template>
  <div>
    <router-link :class="[textColor, backgroundColor, hoverColor]" class="btn group shadow-sm" :to=url>
      {{ label }} <span :class="arrowColor" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: "bg-slate-500"
    },
    hoverColor: {
      type: String,
      default: "hover:bg-slate-600"
    },
    arrowColor: {
      type: String,
      default: "text-slate-200"
    },
    textColor: {
      type: String,
      default: "text-white"
    }
  }
};
</script>