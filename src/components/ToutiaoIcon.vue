<template>
  <i :class="['toutiao', `toutiao-${icon}`]"></i>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
    },
  },
};
</script>
<style></style>
