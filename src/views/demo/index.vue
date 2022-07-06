<template>
  <div>
    demo

    <h1>{{ $store.state.userinfo.name }}</h1>
    <h2>{{ $store.state.count }}</h2>
    <van-field v-model.number="num" />
    <!-- <button @click="count">加一</button> -->
    <button @click="cn">改名</button>
    <button @click="addNum">加num</button>
    <!-- <button @click="count++">jiajia</button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    // count() {
    //   this.$store.commit("addCount");
    // },
    cn() {
      this.$store.commit("changeName");
    },
    addNum() {
      this.$store.commit("addNum", this.num);
    },
  },
  data() {
    return {
      num: 12,
    };
  },
  mounted() {
    console.log(this.$store);
    console.log(this.count);
  },
  computed: {
    // 只读映射
    ...mapState(["count"]),
  },
};
</script>

<style></style>
