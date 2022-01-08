<template>
  <section class="summary">
    <h2 class="summary__heading">Summary</h2>
    <div class="products">
      <div class="products__item" v-for="product in cart" :key="product.id">
        <div class="products__item__left">
          <img :src="editSrc(product)" alt="" />
          <div class="products__item__left__info">
            <h4>
              {{ product.slug.slice(0, product.slug.indexOf("-")) }}
            </h4>
            <p>$ {{ separator(product.price) }}</p>
          </div>
        </div>
        <p class="products__item__quantity">x{{ product.addedQuantity }}</p>
      </div>
    </div>
    <div class="price">
      <div class="price__detail">
        <h4 class="price__detail__title">Total</h4>
        <p class="price__detail__value">$ {{ separator(total) }}</p>
      </div>
      <div class="price__detail">
        <h4 class="price__detail__title">Shipping</h4>
        <p class="price__detail__value">$ {{ shipping }}</p>
      </div>
      <div class="price__detail">
        <h4 class="price__detail__title">VAT (included)</h4>
        <p class="price__detail__value">$ {{ separator(vat) }}</p>
      </div>
      <div class="price__detail grand-total">
        <h4 class="price__detail__title">Grand total</h4>
        <p class="price__detail__value">$ {{ separator(total + shipping) }}</p>
      </div>
    </div>
    <button class="btn default-btn">Continue & pay</button>
  </section>
</template>

<script>
export default {
  name: "Summary",
  props: { cart: Array },
  data() {
    return { shipping: 50 };
  },
  methods: {
    editSrc(product) {
      return require(`../../${product.image.mobile.slice(2)}`);
    },
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    },
  },
  created() {
    console.log("cart", this.cart);
  },
  computed: {
    total() {
      let totalValue = 0;
      this.cart.forEach(
        (product) => (totalValue += product.price * product.addedQuantity)
      );
      return totalValue;
    },
    vat() {
      return (0.2 * this.total).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
  margin: 3.2rem auto 9.7rem auto;
  background: white;
  border-radius: 0.8rem;
  width: 32.7rem;
  padding: 3.2rem 2.4rem;

  @media (min-width: 768px) {
    width: 68.9rem;
    padding: 3.2rem 3.3rem;
    margin-bottom: 11.6rem;
  }

  @media (min-width: 1205px) {
    width: 35rem;
    margin-top: 0;
    height: 61.2rem;
  }

  &__heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.459rem;
    letter-spacing: 0.129rem;
    margin-bottom: 3.1rem;
  }

  .products {
    @media (min-width: 1205px) {
      height: 24rem;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 1rem;

      &::-webkit-scrollbar {
        width: 0.7rem;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb {
        background: rgb(49, 49, 49);
        border-radius: 1rem;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: black;
      }
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.4rem;

      &:last-child {
        margin-bottom: 0;
      }

      &__left {
        display: flex;
        align-items: center;

        img {
          width: 6.4rem;
          height: 6.4rem;
          border-radius: 0.8rem;
        }

        &__info {
          margin-left: 1.6rem;

          h4 {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2.5rem;
            text-transform: uppercase;
          }

          p {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 2.5rem;
            color: #909090;
          }
        }
      }

      &__quantity {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: #909090;
      }
    }
  }

  .price {
    margin-top: 3.2rem;

    &__detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.8rem;

      &:nth-child(3) {
        margin-bottom: 2.4rem;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &__title {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: #a0a0a0;
      }

      &__value {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.459rem;
        text-align: right;
      }
    }
    .grand-total {
      p {
        color: rgba(216, 125, 74, 1) !important;
      }
    }
  }

  .btn {
    width: 100%;
    margin-top: 3.2rem;
  }
}
</style>
