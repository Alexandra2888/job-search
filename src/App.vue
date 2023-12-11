<template>
  <main-nav />
  <router-view />
</template>

<script>
import MainNav from "@/components/nav/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
