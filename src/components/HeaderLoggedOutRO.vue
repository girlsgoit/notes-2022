<template>
  <div>HEADER RO!</div>
  <a href="#" @click="goToLogin()">LOGIN</a>
  <a href="#" @click="changeLang($event)">ru</a>
  <a href="#" @click="goToRegister()">REGISTER</a>

  <hr />
</template>

<script>
export default {
  name: "HeaderLoggedOutRO",
  methods: {
    changeLang(event) {
      event.preventDefault();
      this.$emit("change-lang");
    },

    goToLogin() {
      this.$emit("go-to-login");
    },
    goToRegister() {
      this.$emit("go-to-register");
    },
  },
};
</script>

<style scoped>
</style>