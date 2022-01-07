<template>
  <header class="header">
    <Navbar @toggle-menu-show="$emit('toggle-menu-show', $event)" />
  </header>
</template>

<script>
import Navbar from "../Navbar.vue";

export default {
  name: "Header",
  components: { Navbar },
  emits: ["toggle-menu-show"],
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: black;
}
</style>
