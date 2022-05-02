<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",

  computed: {
    layout() {
      return this.$route.name && this.$route.name !== "login"
        ? DefaultLayout
        : "div";
    },
  },
};
</script>

<style>
@import "~@/assets/style.css";
</style>
