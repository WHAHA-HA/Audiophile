<template>
  <div class="category">
    <img
      v-if="product === 'headphones'"
      src="../../assets/shared/desktop/image-category-thumbnail-headphones.png"
      alt=""
      class="category__thumbnail"
    />
    <img
      v-if="product === 'speakers'"
      src="../../assets/shared/desktop/image-category-thumbnail-speakers.png"
      alt=""
      class="category__thumbnail"
    />
    <img
      v-if="product === 'earphones'"
      src="../../assets/shared/desktop/image-category-thumbnail-earphones.png"
      alt=""
      class="category__thumbnail"
    />
    <h2 class="category__name">{{ product }}</h2>
    <router-link class="category__link" to="#">
      Shop
      <img
        src="../../assets/shared/desktop/icon-arrow-right.svg"
        alt=""
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
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f1f1;
  margin-bottom: 6.8rem;
  border-radius: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }

  &__thumbnail {
    width: 15rem;
    position: relative;
    top: -5.2rem;
    margin-bottom: -5.2rem;
  }

  &__name {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.049rem;
    letter-spacing: 0.107rem;
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

    &:hover {
      color: #d87d4a;
    }

    &__icon {
      margin-left: 1.332rem;
    }
  }
}
</style>
