<template>
  <Header :category="$route.params.category" />
  <ProductPageNavigation />
</template>

<script>
import ProductPageNavigation from "../components/ProductPageNavigation.vue";
import Header from "../components/CategoryPage/Header.vue";
export default {
  name: "CategoryPage",
  components: { ProductPageNavigation, Header },
};
</script>

<style lang="scss" scoped></style>
