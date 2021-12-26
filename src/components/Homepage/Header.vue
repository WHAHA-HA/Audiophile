<template>
  <header class="header">
    <Navbar />
    <Hero />
  </header>
</template>

<script>
import Navbar from "../Navbar.vue";
import Hero from "./Hero.vue";

export default {
  name: "Header",
  components: { Navbar, Hero },
};
</script>

<style lang="scss" scoped>
.header {
  background: url("../../assets/home/mobile/image-header.jpg");
  background-position: center;
  background-size: cover;
}
</style>
