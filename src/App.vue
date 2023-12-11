<template>
  <main-nav />
  <the-hero />
</template>

<script>
import MainNav from "@/components/nav/MainNav.vue";
import TheHero from "@/components/hero/TheHero.vue";

export default {
  name: "App",
  components: {
    MainNav,
    TheHero,
  },
};
</script>
