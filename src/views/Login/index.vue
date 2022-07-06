<template>
  <div class="login-container">
    <van-nav-bar title="登录">
      <!-- <template #left>
        <ToutiaoIcon icon="guanbi1" />
      </template> -->

      <van-icon slot="left" name="cross" @click="$router.back()" />
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model.number="mobile"
        name="mobile"
        placeholder="手机号"
        :rules="rules.mobile"
        type="number"
        maxlength="11"
      >
        <template #left-icon>
          <ToutiaoIcon icon="shouji"></ToutiaoIcon></template
      ></van-field>
      <van-field
        v-model="code"
        name="code"
        placeholder="验证码"
        :rules="rules.code"
        type="number"
        maxlength="6"
      >
        <template #left-icon>
          <ToutiaoIcon icon="yanzhengma"></ToutiaoIcon>
        </template>
        <template #button>
          <van-count-down
            :time="5000"
            format="ss"
            v-if="isShow"
            @finish="isShow = false"
          />
          <van-button
            v-else
            size="small"
            type="primary"
            native-type="button"
            @click="sendYzm"
            :disabled="flag"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button square block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { userlog, getyzm } from "@/api/user.js";
import { Toast } from "vant";
import ToutiaoIcon from "@/components/ToutiaoIcon.vue";
export default {
  name: "LoginPage",
  components: { ToutiaoIcon },
  props: {},
  data() {
    return {
      mobile: "13911111112",
      code: "246810", //246810
      isShow: false,
      flag: false,
      // userI: {
      //   moblie: "",
      //   code: "",
      // },
      //表单验证
      rules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
          },
          {
            pattern: /^\d{6}$/,
            message: "验证码格式不正确",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit(value) {
      try {
        const re = await userlog(value);
        this.$store.commit("userToken", re.data.data);
        // console.log(re);
        Toast.success("登录成功");
        this.$router.push("/");
      } catch (e) {
        Toast.fail(e?.response?.data?.message || "服务器端错误");
      }
      // console.log("submit", this.userI);
    },
    async sendYzm() {
      try {
        await this.$refs.form.validate("mobile");
      } catch (e) {
        return;
      }
      try {
        // await this.$refs.form.validate("mobile");
        // console.log("发送验证码");
        //发送验证码禁用按钮直到请求结束解开
        this.flag = true;
        await getyzm(this.mobile);
        Toast.success("发送验证码成功");
        //发送成功显示倒计时
        this.isShow = true;
      } catch (e) {
        // console.log(e);
        Toast.fail(e.response.data.message || "出错了");
        //错误不需要开启倒计时
        // this.isShow = false;
      } finally {
        //重置flag让按钮重置
        this.flag = false;
      }
    },
  },
};
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  /deep/.van-button--small {
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
    border: none;
  }
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>
