<template>
  <div>HEADER RO!</div>
  <a href="#" @click="goToLogin($event)">LOGIN</a>
  <a href="#" @click="changeLang($event)">ru</a>
  <a href="#" @click="goToRegister($event)">REGISTER</a>

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

    goToLogin(event) {
      event.preventDefault();
      this.$emit("go-to-login");
    },
    goToRegister(event) {
      event.preventDefault();
      this.$emit("go-to-register");
    },
  },
};
</script>

<style>
</style>