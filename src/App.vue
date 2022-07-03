<template>
  <div id="app">
    <h1>黑马头条</h1>
    <toutiao-icon :icon="'wode'"></toutiao-icon>
    <router-view />
  </div>
</template>

<script>
import ToutiaoIcon from "./components/ToutiaoIcon.vue";
export default {
  components: { ToutiaoIcon },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less"></style>
