<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  name: "App",

  computed: {
    layout() {
      return this.$route.name && this.$route.name !== "login"
        ? DefaultLayout
        : EmptyLayout;
    },
  },
};
</script>

<style>
@import "~@/assets/style.css";
</style>
