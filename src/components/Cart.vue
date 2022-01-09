<template>
  <div :class="['overlay', show ? 'showElement' : 'hideElement']"></div>

  <div :class="['cart', show ? 'showElement' : 'hideElement']">
    <div class="cart__header">
      <h3 class="cart__header__title">Cart({{ cart.length }})</h3>
      <button class="cart__header__btn" @click="$emit('empty-cart')">
        Remove all
      </button>
    </div>
    <div class="products">
      <div class="products__item" v-for="product in cart" :key="product.id">
        <div class="left">
          <img :src="editSrc(product)" :alt="product.name" />
          <div class="products__item__info">
            <h4>
              {{ product.slug.slice(0, product.slug.indexOf("-")) }}
            </h4>
            <p>$ {{ separator(product.price) }}</p>
          </div>
        </div>
        <div class="products__item__quantity">
          <button class="less" @click="changeQuantity('subtract', product.id)">
            -
          </button>
          <p class="value">{{ product.addedQuantity }}</p>
          <button class="more" @click="changeQuantity('add', product.id)">
            +
          </button>
        </div>
      </div>
    </div>
    <div class="cart__total">
      <h4>Total</h4>
      <p>${{ separator(total) }}</p>
    </div>
    <router-link
      class="cart__router-link"
      to="/checkout"
      @click="$emit('toggle-menu-show', 'cart')"
      v-if="cart.length > 0"
      ><button class="cart__router-link__btn default-btn">
        Checkout
      </button></router-link
    >
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
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    },
    changeQuantity(operation, id) {
      const data = {
        productId: id,
        operation: operation,
      };
      this.$emit("change-quantity", data);
    },
  },
  computed: {
    total() {
      let totalValue = 0;
      this.cart.forEach(
        (product) => (totalValue += product.price * product.addedQuantity)
      );
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

  @media (min-width: 768px) {
    width: 37.7rem;
    right: 4rem;
    transform: translate(0);
    left: auto;
  }

  @media (min-width: 1205px) {
    top: 10rem;
    right: 16.5rem;
  }

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
      transition: all 0.3s ease;

      &:hover {
        color: rgba(216, 125, 74, 1);
      }
    }
  }

  .products {
    margin: 3.2rem 0;
    width: 100%;
    max-height: 26rem;
    overflow-y: auto;
    overflow-x: hidden;

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

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.4rem;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      .left {
        display: flex;
        align-items: center;
      }

      img {
        width: 6.4rem;
        border-radius: 0.8rem;
      }

      &__info {
        margin-left: 1.6rem;
        @media (min-width: 768px) {
          margin-left: 1.6rem;
          width: 13.7rem;
        }
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

      &__quantity {
        display: flex;
        align-items: center;
        background: #f1f1f1;

        * {
          border: none;
          background: none;
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 1.776rem;
          letter-spacing: 0.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          width: 3.2rem;
          color: #b5b5b5;
          height: 3.2rem;
          transition: all 0.3s ease;

          &:hover {
            color: rgba(216, 125, 74, 1);
          }
        }

        .value {
          width: 3.2rem;
          height: 3.2rem;
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

  &__router-link {
    width: 100%;
    &__btn {
      width: 100%;
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
