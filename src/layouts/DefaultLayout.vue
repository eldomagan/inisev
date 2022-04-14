<template>
  <div class="default-layout">
    <the-sidebar :open="isMenuOpen" @close="isMenuOpen = false" />
    <div class="default-layout__content">
      <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
        <menu-icon />
      </button>
      <slot />
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import MenuIcon from "@/components/MenuIcon.vue";

export default {
  name: "DefaultLayout",

  components: {
    TheSidebar,
    MenuIcon,
  },

  data: () => ({
    isMenuOpen: false,
  }),
};
</script>
