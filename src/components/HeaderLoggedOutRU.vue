<template>
  <div>HEADER RU!</div>
  <a href="#" @click="changeLang($event)">ro</a>

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
  },
};
</script>

<style scoped>
</style>