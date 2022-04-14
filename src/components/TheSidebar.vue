<template>
  <div class="sidebar" :class="{ open }">
    <button class="sidebar__close" v-show="open" @click="$emit('close')">
      <close-icon />
    </button>

    <div class="sidebar__logo">Logo</div>

    <div class="sidebar__menu">
      <ul>
        <li>
          <a href="#">Menu Element</a>
        </li>
        <li>
          <a href="#">Menu Element</a>
        </li>
        <li>
          <a href="#">Menu Element</a>
        </li>
      </ul>
    </div>

    <div class="sidebar__footer">
      <a href="#" @click.prevent="onLogoutClick">
        <logout-icon />
        Admin
      </a>
    </div>
  </div>
</template>

<script>
import LogoutIcon from "@/components/LogoutIcon.vue";
import CloseIcon from "@/components/CloseIcon.vue";

export default {
  name: "TheSidebar",
  components: {
    LogoutIcon,
    CloseIcon,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onLogoutClick() {
      localStorage.removeItem("authenticated");
      this.$router.push("/login");
    },
  },
};
</script>
