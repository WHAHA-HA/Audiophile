<template>
  <div class="category">
    <img
      v-if="product === 'headphones'"
      src="../../assets/shared/desktop/image-category-thumbnail-headphones.png"
      alt="headphones"
      class="category__thumbnail"
      id="headphones"
    />
    <img
      v-if="product === 'speakers'"
      src="../../assets/shared/desktop/image-category-thumbnail-speakers.png"
      alt="speakers"
      class="category__thumbnail"
      id="speakers"
    />
    <img
      v-if="product === 'earphones'"
      src="../../assets/shared/desktop/image-category-thumbnail-earphones.png"
      alt="earphones"
      class="category__thumbnail"
      id="earphones"
    />
    <h2 class="category__name">{{ product }}</h2>
    <router-link
      class="category__link"
      :to="{ name: 'CategoryPage', params: { category: `${product}` } }"
      @click="scrollToTop"
    >
      Shop
      <img
        src="../../assets/shared/desktop/icon-arrow-right.svg"
        class="category__link__icon"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    product: String,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f1f1;
  margin: 0 auto 6.8rem auto;
  border-radius: 0.8rem;
  max-width: 32.7rem;

  @media (min-width: 768px) {
    margin: 0;
    margin-right: 1rem;
    max-width: auto;
    min-width: 22.3rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 1205px) {
    margin-right: 3rem;
    min-width: 35rem;

    &:last-child {
      margin-right: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  & #speakers {
    top: -4.6rem;
  }

  & #earphones {
    top: -4rem;
  }

  &__thumbnail {
    width: 15rem;
    position: relative;
    top: -5.2rem;
    margin-bottom: -5.2rem;

    @media (min-width: 1205px) {
      width: 17rem;
    }
  }

  &__name {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.049rem;
    letter-spacing: 0.107rem;

    @media (min-width: 1205px) {
      font-size: 1.8rem;
      line-height: 2.459rem;
      letter-spacing: 0.129rem;
    }
  }

  &__link {
    margin-top: 1.7rem;
    margin-bottom: 2.2rem;
    color: #797979;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.776rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      color: #d87d4a;
    }

    &__icon {
      margin-left: 1.332rem;
    }
  }
}
</style>
