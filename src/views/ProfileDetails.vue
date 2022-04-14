<template>
  <div v-if="user" class="profile-details" @click="onClose">
    <div class="profile-details__content" @click.stop>
      <button class="profile-details__close" @click="onClose">
        <close-icon />
      </button>

      <div
        class="profile-details__photo"
        :style="`background-image: url(${user.image})`"
      ></div>

      <div class="profile-details__info">
        <div class="profile-details__info-item">
          <user-icon />
          <div>{{ user.name }}</div>
        </div>
        <div class="profile-details__info-item">
          <mail-icon />
          <div>
            <a
              :href="`mailto:${user.email}?subject=We are hiring&body=Hello ${user.name}. We'd like to propose you an offer`"
            >
              {{ user.email }}
            </a>
          </div>
        </div>
        <div class="profile-details__info-item">
          <phone-icon />
          <div>{{ user.phone }}</div>
        </div>
        <div class="profile-details__info-item">
          <home-icon />
          <div>{{ user.address.city }}, {{ user.address.street }}</div>
        </div>
        <div class="profile-details__info-item">
          <globe-icon />
          <div>{{ user.website }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserIcon from "@/components/UserIcon.vue";
import MailIcon from "@/components/MailIcon.vue";
import PhoneIcon from "@/components/PhoneIcon.vue";
import HomeIcon from "@/components/HomeIcon.vue";
import GlobeIcon from "@/components/GlobeIcon.vue";
import CloseIcon from "@/components/CloseIcon.vue";

export default {
  name: "ProfileDetails",
  components: {
    UserIcon,
    MailIcon,
    PhoneIcon,
    HomeIcon,
    GlobeIcon,
    CloseIcon,
  },

  computed: {
    ...mapGetters(["userById"]),

    user() {
      return this.userById(this.$route.params.id);
    },
  },

  methods: {
    onClose() {
      this.$router.back();
    },
  },
};
</script>
