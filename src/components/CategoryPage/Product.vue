<template>
  <article class="product">
    <img :src="editSrc" class="product__preview" />
    <div class="product__text">
      <p class="product__text__tag" v-if="product && product.new">
        New product
      </p>
      <h2 class="product__text__title">{{ product && product.name }}</h2>
      <p class="product__text__description">
        {{ product && product.description }}
      </p>
      <button class="product__text__btn default-btn">See product</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Product",
  props: { product: Object },
  computed: {
    editSrc() {
      return require(`../../${this.product.image.desktop.slice(2)}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin: 6rem auto;
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 68.9rem;
  }

  @media (min-width: 1205px) {
    width: 111rem;
    flex-direction: row;

    &:nth-child(odd) {
      flex-direction: row-reverse;

      & .product__text {
        margin-left: 0;
        margin-right: 12.5rem;
      }
    }
  }

  & * {
    text-align: center;
  }

  &:first-child {
    margin-top: 6.4rem;
  }

  &__preview {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
    object-position: center;

    @media (min-width: 768px) {
      height: 35.2rem;
    }

    @media (min-width: 1205px) {
      width: 54rem;
      height: 56rem;
    }
  }

  &__text {
    margin-top: 3.2rem;

    @media (min-width: 768px) {
      width: 57.2rem;
    }

    @media (min-width: 1205px) {
      margin: 0;
      margin-left: 12.5rem;
      width: 44.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      * {
        text-align: left;
      }
    }

    &__tag {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.912rem;
      letter-spacing: 1rem;
      text-transform: uppercase;
      color: rgba(216, 125, 74, 1);
    }

    &__title {
      margin: 2.4rem 0;
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.825rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 4.4rem;
        letter-spacing: 0.143rem;
      }
    }

    &__description {
      margin-bottom: 2.4rem;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: #8d8d8d;
    }
  }
}
</style>