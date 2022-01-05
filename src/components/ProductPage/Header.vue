<template>
  <header class="header">
    <Navbar />
  </header>
</template>

<script>
import Navbar from "../Navbar.vue";

export default {
  name: "Header",
  components: { Navbar },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: black;
}
</style>
