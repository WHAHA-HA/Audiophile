<template>
  <div :class="['overlay', show ? 'showElement' : 'hideElement']"></div>

  <div :class="['cart', show ? 'showElement' : 'hideElement']">
    <div class="cart__header">
      <h3 class="cart__header__title">Cart({{ cart.length }})</h3>
      <button class="cart__header__btn">Remove all</button>
    </div>
    <div class="products">
      <div class="products__item" v-for="product in cart" :key="product.id">
        <img :src="editSrc(product)" alt="" />
        <div class="products__item__info">
          <h4>{{ product.name }}</h4>
          <p>{{ product.price }}</p>
        </div>
        <div class="products__item__quantity">
          <button class="less">-</button>
          <p class="value">1</p>
          <button class="more">+</button>
        </div>
      </div>
    </div>
    <div class="cart__total">
      <h4>Total</h4>
      <p>${{ total }}</p>
    </div>
    <button class="cart__btn default-btn">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: { show: Boolean, cart: Array },
  methods: {
    editSrc(product) {
      return require(`../${product.image.mobile.slice(2)}`);
    },
  },
  computed: {
    total() {
      let totalValue = 0;
      this.cart.forEach((product) => (totalValue += product.price));
      return totalValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  background: black;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 1;
  position: absolute;
  opacity: 0.4;

  @media (min-width: 1205px) {
    display: none !important;
  }
}

.cart {
  background: white;
  position: absolute;
  z-index: 2;
  width: 32.7rem;
  border-radius: 0.8rem;
  padding: 3.2rem 2.8rem;
  top: 11.5rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__title {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.459rem;
      letter-spacing: 0.129rem;
      text-transform: uppercase;
    }

    &__btn {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.5rem;
      border: none;
      background: none;
      color: #808080;
      text-decoration: underline;
    }
  }

  .products {
    margin: 3.2rem 0;
    width: 100%;
    max-height: 24rem;
    overflow-y: auto;
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.4rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        width: 6.4rem;
        border-radius: 0.8rem;
      }

      &__info {
        width: 7.6rem;
        h4 {
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }

        p {
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 2.5rem;
          color: #909090;
        }
      }

      &__quantity {
        display: flex;
        align-items: center;
        background: #f1f1f1;
        padding: 0.7rem 1.15rem;

        * {
          border: none;
          background: none;
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 1.776rem;
          letter-spacing: 0.1rem;
        }

        .value {
          margin: 0 1.3rem;
        }
      }
    }
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    width: 100%;

    h4 {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-transform: uppercase;
      color: #808080;
    }

    p {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.459rem;
    }
  }
}

.showElement {
  display: flex;
}

.hideElement {
  display: none;
}
</style>
