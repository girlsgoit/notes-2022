<template>
  <div>{{ user }}</div>
  <a href="#" @click="changeLang($event)">ru</a>
  <a href="#" @click="signOut($event)">SIGN OUT</a>
  <div>HeaderRO</div>
</template>

<script>
export default {
  name: "HeaderRO",
  methods: {
    changeLang(event) {
      event.preventDefault();
      this.$emit("change-lang");
    },
    signOut(event) {
      event.preventDefault();
      this.$emit("sign-out");
    },
  },
};
</script>

<style>
</style>

