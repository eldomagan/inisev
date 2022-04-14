<template>
  <div class="users-list__item" :style="`background-image: url(${user.image})`">
    <div class="users-list__item__info">
      <div class="users-list__item-name">{{ user.name }}</div>
      <div class="users-list__item-city">{{ user.address.city }}</div>
      <a
        :href="`mailto:${user.email}?subject=We are hiring&body=Hello ${user.name}. We'd like to propose you an offer`"
        class="users-list__item-mail"
      >
        <mail-icon />
      </a>
    </div>
  </div>
</template>

<script>
import MailIcon from "@/components/MailIcon.vue";

export default {
  name: "ProfileCard",

  components: {
    MailIcon,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
