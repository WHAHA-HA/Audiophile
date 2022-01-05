<template>
  <header class="header">
    <Navbar />
    <Heading :category="category" />
  </header>
</template>

<script>
import Navbar from "../Navbar.vue";
import Heading from "./Heading.vue";

export default {
  name: "Hero",
  components: { Navbar, Heading },
  props: { category: String },
};
</script>

<style lang="scss" scoped>
.header {
  background: black;
  width: 100%;
}
</style>
