import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home"),
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/video"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("@/views/my"),
      },
      {
        path: "/qa",
        name: "qa",
        component: () => import("@/views/qa"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/demo"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
