<template>
  <div>HEADER RO!</div>
  <a href="#" @click="changeLang($event)">ru</a>

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