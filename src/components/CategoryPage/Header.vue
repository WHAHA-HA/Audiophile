<template>
  <header class="header">
    <Navbar @toggle-menu-show="$emit('toggle-menu-show', $event)" />
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
  emits: ["toggle-menu-show"],
};
</script>

<style lang="scss" scoped>
.header {
  background: black;
  width: 100%;
}
</style>
