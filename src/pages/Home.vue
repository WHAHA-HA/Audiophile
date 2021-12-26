<template>
  <Header />
  <main>
    <section class="categories">
      <Category product="headphones" />
      <Category product="speakers" />
      <Category product="earphones" />
    </section>
    <ZX9Preview />
  </main>
</template>

<script>
import Header from "../components/Homepage/Header.vue";
import Category from "../components/Homepage/Category.vue";
import ZX9Preview from "../components/Homepage/ZX9Preview.vue";

export default {
  name: "Home",
  components: { Header, Category, ZX9Preview },
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 9.2rem 2.4rem 0 2.4rem;
}
</style>
