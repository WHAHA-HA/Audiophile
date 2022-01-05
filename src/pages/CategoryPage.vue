<template>
  <Header :category="category" />
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
  data() {
    return {
      productInfo: jsonData,
      category: this.$route.params.category,
    };
  },
  computed: {
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
  beforeMount() {
    console.log("productInfo", this.currentProducts);
  },
};
</script>

<style lang="scss" scoped></style>
