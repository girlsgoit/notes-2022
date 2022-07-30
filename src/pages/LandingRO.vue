<template>
  <HeaderLoggedOutRO
    @change-lang="$router.push('/ru')"
    @go-to-login="$router.push('/linkloginro')"
    @go-to-register="$router.push('/linkregisterro')"
  />
  <h1>Salutare!</h1>
  <FooterRO />
</template>

<script>
import HeaderLoggedOutRO from "../components/HeaderLoggedOutRO.vue";
import FooterRO from "../components/FooterRO.vue";

export default {
  name: "LandingRO",
  components: {
    HeaderLoggedOutRO,
    FooterRO,
  },
};
</script>

<style>
</style>