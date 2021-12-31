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
  background-image: url("../../assets/home/mobile/image-header.jpg");
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url("../../assets/home/tablet/image-header.jpg");
    background-position: center;
    background-size: cover;
  }
}
</style>
