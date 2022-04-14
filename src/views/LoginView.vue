<template>
  <div class="login">
    <div class="login__form">
      <h1>Sign in to your account</h1>
      <form class="form" @submit.prevent="login">
        <div v-show="showError" class="login__form__error">
          Bad credentials! Please retry.
        </div>

        <div class="form__group">
          <input
            type="text"
            name="username"
            class="form__input"
            v-model.trim="username"
            placeholder="Username"
          />
        </div>
        <div class="form__group">
          <input
            type="password"
            name="password"
            class="form__input"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <div class="form__group">
          <button class="form__button" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {
      username: "",
      password: "",
      showError: false,
    };
  },

  methods: {
    login() {
      if (!this.username || !this.password) {
        return;
      }

      if (this.username === "admin" && this.password === "1234") {
        localStorage.setItem("authenticated", true);
        return this.$router.push("/users");
      }

      // show error message
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    },
  },
};
</script>
