import Vue from "vue";
import Vuex from "vuex";

const commed_key = "userTokens";

Vue.use(Vuex);
import { getLocal, setLocal } from "@/utils/storage";

export default new Vuex.Store({
  state: {
    // userTokens: JSON.parse(localStorage.getItem("userTokens")),
    userTokens: getLocal(commed_key),
  },
  getters: {},
  mutations: {
    userToken(state, val) {
      state.userTokens = val;
      // localStorage.setItem("userTokens", JSON.stringify(state.userTokens));
      setLocal(commed_key, val);
    },
  },
  actions: {},
  modules: {},
});
