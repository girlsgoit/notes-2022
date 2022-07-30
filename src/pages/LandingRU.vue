<template>
  <HeaderLoggedOutRU
    @change-lang="$router.push('/ro')"
    @go-to-login="$router.push('/ru/login')"
    @go-to-register="$router.push('/ru/register')"
  />
  <LandingThingsRU />
  <FooterRU />
</template>

<script>
import HeaderLoggedOutRU from "../components/HeaderLoggedOutRU.vue";
import LandingThingsRU from "../components/LandingThingsRU.vue";
import FooterRU from "../components/FooterRU.vue";

export default {
  name: "LandingRU",
  components: { HeaderLoggedOutRU, FooterRU, LandingThingsRU },
};
</script>

<style>
</style>