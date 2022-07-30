<template>
  <div>{{ user }}</div>
  <a href="#" @click="changeLang($event)">ro</a>
  <a href="#" @click="signOut($event)">SIGN OUT</a>
  <div>HeaderRU</div>
</template>

<script>
export default {
  name: "HeaderRU",
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