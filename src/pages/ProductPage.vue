<template>
  <Header />
  <main>
    <router-link to="#" class="back-link">Go back</router-link>
    <article class="overview">
      <img :src="editSrc" class="overview__image" />
      <div class="overview__text">
        <p class="overview__text__tag" v-show="currentProduct.new">
          New product
        </p>
        <h2 class="overview__text__title">{{ currentProduct.name }}</h2>
        <p class="overview__text__description">
          {{ currentProduct.description }}
        </p>
        <p class="overview__text__price">$ 2,999</p>
        <div class="overview__text__btn-section">
          <div class="overview__text__btn-section__number">
            <button
              class="overview__text__btn-section__number__less"
              @click="decreaseTotal"
            >
              -
            </button>
            <p class="overview__text__btn-section__number__value">
              {{ total }}
            </p>
            <button
              class="overview__text__btn-section__number__more"
              @click="increaseTotal"
            >
              +
            </button>
          </div>
          <button class="overview__text__btn-section__btn default-btn">
            Add to cart
          </button>
        </div>
      </div>
    </article>
    <ProductPageNavigation />
  </main>
</template>

<script>
import Header from "../components/ProductPage/Header.vue";
import ProductPageNavigation from "../components/ProductPageNavigation.vue";
import data from "../data.json";

export default {
  name: "ProductPage",
  components: { Header, ProductPageNavigation },
  data() {
    return {
      total: 1,
      productName: this.$route.params.product,
      products: data,
      windowSize: null,
    };
  },
  methods: {
    increaseTotal() {
      this.total++;
    },
    decreaseTotal() {
      if (this.total > 1) {
        this.total--;
      }
    },
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
  },
  created() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
    console.log(this.currentProduct);
    console.log("windowSize", this.windowSize);
    window.scrollTo(0, 0);
  },
  computed: {
    currentProduct() {
      return this.products
        .slice()
        .find((product) => product.name === this.productName);
    },
    editSrc() {
      if (this.windowSize === "mobile") {
        return require(`../${this.currentProduct.image.mobile.slice(2)}`);
      } else if (this.windowSize === "tablet") {
        return require(`../${this.currentProduct.image.tablet.slice(2)}`);
      } else {
        return require(`../${this.currentProduct.image.desktop.slice(2)}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 32.7rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 68.9rem;
  }

  @media (min-width: 1205px) {
    width: 111rem;
  }
}

.back-link {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: #7d7d7d;
  margin: 1.6rem 0 2.4rem 0;
  display: block;

  @media (min-width: 768px) {
    margin-top: 3.3rem;
  }

  @media (min-width: 1205px) {
    margin-top: 7.9rem;
  }
}

.overview {
  margin: 2.4rem auto 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1205px) {
    margin-top: 5.6rem;
  }

  & * {
    text-align: left;
  }

  &__image {
    width: 100%;
    border-radius: 0.8rem;
    object-fit: cover;
    object-position: center;

    @media (min-width: 768px) {
      height: 48rem;
      width: 28.1rem;
    }

    @media (min-width: 1205px) {
      width: 54rem;
      height: 56rem;
    }
  }

  &__text {
    margin-top: 3.2rem;

    @media (min-width: 768px) {
      width: 33.95rem;
      margin-top: 0;
      margin-left: 6.9rem;
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

    &__price {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.459rem;
      letter-spacing: 0.129rem;
      margin-bottom: 3.1rem;
    }

    &__btn-section {
      display: flex;
      align-items: center;

      &__number {
        display: flex;
        align-items: center;
        background: #f1f1f1;
        padding: 1.5rem;
        width: 12rem;
        justify-content: space-between;
        margin-right: 1.6rem;

        & * {
          background: none;
          border: none;
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 1.776rem;
          letter-spacing: 0.1rem;
        }

        & button {
          &:hover {
            color: rgba(216, 125, 74, 1);
          }
        }
      }
    }
  }
}
</style>
