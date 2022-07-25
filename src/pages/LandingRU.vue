<template>
  <HeaderLoggedOutRU @change-lang="$router.push('/ro')" />
  <h1>Privet!</h1>
  <FooterRU />
</template>

<script>
import HeaderLoggedOutRU from "../components/HeaderLoggedOutRU.vue";
import FooterRU from "../components/FooterRU.vue";

export default {
  name: "LandingRU",
  components: { HeaderLoggedOutRU, FooterRU },
};
</script>

<style scoped>
</style>