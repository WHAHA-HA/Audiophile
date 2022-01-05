<template>
  <Header />
  <main>
    <router-link to="#" class="back-link">Go back</router-link>
    <article class="overview">
      <img
        src="../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"
        class="overview__image"
      />
      <div class="overview__text">
        <p class="overview__text__tag">New product</p>
        <h2 class="overview__text__title">Product name</h2>
        <p class="overview__text__description">Product description</p>
        <router-link to="#"
          ><button class="overview__text__btn default-btn">
            See product
          </button></router-link
        >
      </div>
    </article>
    <ProductPageNavigation />
  </main>
</template>

<script>
import Header from "../components/ProductPage/Header.vue";
import ProductPageNavigation from "../components/ProductPageNavigation.vue";

export default {
  name: "ProductPage",
  components: { Header, ProductPageNavigation },
};
</script>

<style lang="scss" scoped>
main {
  width: 32.7rem;
  margin: 0 auto;
}

.back-link {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: #7d7d7d;
  margin: 1.6rem 0 2.4rem 0;
  display: block;
}
</style>
