import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    name: "profiles",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    children: [
      {
        path: ":id",
        name: "profiles.details",
        component: () => import("../views/ProfileDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
  } else {
    if (localStorage.getItem("authenticated")) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
