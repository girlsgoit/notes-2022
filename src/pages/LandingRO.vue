<template>
  <HeaderLoggedOutRO
    @change-lang="$router.push('/ru')"
    @go-to-login="$router.push('/ro/login')"
    @go-to-register="$router.push('/ro/register')"
  />
  <LandingThingsRO />
  <PartnersRO />
  <FooterRO />
</template>

<script>
import HeaderLoggedOutRO from "../components/HeaderLoggedOutRO.vue";
import PartnersRO from "../components/PartnersRO.vue";
import LandingThingsRO from "../components/LandingThingsRO.vue";
import FooterRO from "../components/FooterRO.vue";

export default {
  name: "LandingRO",
  components: {
    HeaderLoggedOutRO,
    FooterRO,
    PartnersRO,
    LandingThingsRO,
  },
};
</script>

<style>
</style>