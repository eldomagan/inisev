<template>
  <div class="home">
    <h1>
      Users
      <div class="underline"></div>
    </h1>
    <div class="users-list">
      <template v-if="loading">
        <div v-for="i in 6" :key="i" class="users-list__item--loading"></div>
      </template>

      <template v-else>
        <profile-card
          v-for="user in users"
          :key="user.id"
          :user="user"
          @click.native="onUserClick(user)"
        />
      </template>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    ProfileCard,
  },

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapGetters(["users"]),
  },

  beforeMount() {
    this.loading = true;
    // Should store loading state in store
    this.fetchUsers()
      .then(() => {
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },

  methods: {
    ...mapActions(["fetchUsers"]),

    onUserClick(user) {
      this.$router.push({
        name: "profiles.details",
        params: {
          id: user.id,
        },
      });
    },
  },
};
</script>
