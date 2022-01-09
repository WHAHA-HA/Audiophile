<template>
  <article class="card">
    <img :src="editSrc" :alt="product.name" class="card__image" />
    <h4 class="card__title">{{ product.name }}</h4>
    <router-link :to="`/product/${product.slug}`" @click="clickHandler">
      <button class="card__btn default-btn">See product</button>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "OthersCard",
  props: { product: Object },
  data() {
    return {
      windowSize: null,
    };
  },
  methods: {
    setWindowSize() {
      let windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        this.windowSize = "mobile";
      } else if (windowWidth < 1205) {
        this.windowSize = "tablet";
      } else {
        this.windowSize = "desktop";
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    clickHandler() {
      this.scrollToTop();
      this.$emit("reset-total");
    },
  },
  computed: {
    editSrc() {
      if (this.windowSize === "mobile") {
        return require(`../../${this.product.image.mobile.slice(2)}`);
      } else if (this.windowSize === "tablet") {
        return require(`../../${this.product.image.tablet.slice(2)}`);
      } else {
        return require(`../../${this.product.image.desktop.slice(2)}`);
      }
    },
  },
  created() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.6rem;

  @media (min-width: 768px) {
    width: 22.3rem;
    margin-bottom: 0;
    margin-right: 1.1rem;
  }

  @media (min-width: 1205px) {
    width: 35rem;
    margin-right: 3rem;
  }

  &:last-child {
    margin-bottom: 0;

    @media (min-width: 768px) {
      margin-right: 0;
    }
  }

  * {
    text-align: center;
  }

  &__image {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.8rem;

    @media (min-width: 768px) {
      height: 31.8rem;
    }
  }

  &__title {
    margin-top: 3.2rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.278rem;
    letter-spacing: 0.171rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  }

  &__btn {
    margin-top: 3.2rem;
  }
}
</style>
