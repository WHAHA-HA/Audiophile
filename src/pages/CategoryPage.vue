<template>
  <Header
    :category="category"
    @toggle-menu-show="$emit('toggle-menu-show', $event)"
  />
  <Product
    v-for="product in sortedProducts"
    :key="product.id"
    :product="product"
  />
  <ProductPageNavigation />
</template>

<script>
import ProductPageNavigation from "../components/ProductPageNavigation.vue";
import Header from "../components/CategoryPage/Header.vue";
import Product from "../components/CategoryPage/Product.vue";
import jsonData from "../data.json";

export default {
  name: "CategoryPage",
  components: { ProductPageNavigation, Header, Product },
  emits: ["toggle-menu-show"],
  data() {
    return {
      productInfo: jsonData,
    };
  },
  computed: {
    category() {
      return this.$route.params.category;
    },
    headphones() {
      return this.productInfo.filter(
        (product) => product.category === "headphones"
      );
    },
    earphones() {
      return this.productInfo.filter(
        (product) => product.category === "earphones"
      );
    },
    speakers() {
      return this.productInfo.filter(
        (product) => product.category === "speakers"
      );
    },
    currentProducts() {
      return this.category === "headphones"
        ? this.headphones
        : this.category === "earphones"
        ? this.earphones
        : this.speakers;
    },
    sortedProducts() {
      return this.currentProducts.slice().sort((a, b) => b.new - a.new);
    },
  },
};
</script>

<style lang="scss" scoped></style>
