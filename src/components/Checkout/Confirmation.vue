<template>
  <div class="overlay"></div>
  <div class="confirmation">
    <i class="fas fa-check-circle confirmation__icon"></i>
    <h1 class="confirmation__heading">Thank you for your order</h1>
    <p class="confirmation__text">
      You will receive an email confirmation shortly.
    </p>
    <div class="confirmation__order">
      <div class="confirmation__order__left">
        <div class="product">
          <div class="product__left">
            <img :src="editSrc(cart[0])" alt="" class="product__left__image" />
            <div class="product__left__info">
              <h2 class="product__left__info__name">
                {{ editedSlug }}
              </h2>
              <p class="product__left__info__price">
                $ {{ separator(cart[0].price) }}
              </p>
            </div>
          </div>
          <p class="product__quantity">x{{ cart[0].addedQuantity }}</p>
        </div>
        <p class="confirmation__order__left__rest">
          and {{ cart.length - 1 }} other item(s)
        </p>
      </div>
      <div class="confirmation__order__right">
        <h2 class="confirmation__order__right__heading">Grand total</h2>
        <p class="confirmation__order__right__total">
          $ {{ separator(total) }}
        </p>
      </div>
    </div>
    <router-link to="/" class="home-link">
      <button class="home-link__btn default-btn">Back to home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Confirmation",
  props: { cart: Array, total: Number },
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
  computed: {
    editedSlug() {
      return this.cart[0].slug.slice(0, this.cart[0].slug.indexOf("-"));
    },
  },
  created() {
    console.log("slug", this.cart[0].slug);
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  background: black;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 3;
  position: absolute;
  opacity: 0.4;
}

.confirmation {
  background: white;
  position: absolute;
  z-index: 4;
  width: 32.7rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;
  padding: 3.2rem;

  @media (min-width: 768px) {
    width: 54rem;
    padding: 4.8rem;
  }

  &__icon {
    font-size: 6.4rem;
    color: rgba(216, 125, 74, 1);
  }

  &__heading {
    margin-top: 2.3rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    letter-spacing: 0.086rem;

    @media (min-width: 768px) {
      width: 28.4rem;
      font-size: 3.2rem;
      line-height: 3.6rem;
      letter-spacing: 0.114rem;
      margin-top: 3.3rem;
    }
  }

  &__text {
    margin-top: 1.6rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #808080;

    @media (min-width: 768px) {
      margin-top: 2.4rem;
    }
  }

  &__order {
    margin-top: 2.4rem;
    border-radius: 0.8rem;
    overflow: hidden;

    @media (min-width: 768px) {
      display: flex;
    }

    &__left {
      padding: 2.4rem;
      background: #f1f1f1;

      @media (min-width: 768px) {
        width: 24.6rem;
      }

      &__rest {
        margin-top: 1.2rem;
        color: #797979;
        text-align: center;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.639rem;
        letter-spacing: -0.021rem;
      }
    }

    &__right {
      background: black;
      padding: 1.5rem 2.4rem 1.9rem 2.4rem;

      @media (min-width: 768px) {
        width: 19.8rem;
        padding: 0;
        padding-top: 4.1rem;
        padding-left: 2.4rem;
      }

      &__heading {
        color: #808080;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.5rem;
        text-transform: uppercase;
      }

      &__total {
        color: white;
        margin-top: 0.8rem;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.459rem;
      }
    }
  }

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid #dedede;
    padding-bottom: 1.2rem;

    @media (min-width: 768px) {
      align-items: flex-start;
    }

    &__left {
      display: flex;
      align-items: center;

      &__image {
        width: 2.8rem;
        height: 3.2rem;
        object-fit: cover;
        object-position: center;
      }
      &__info {
        margin-left: 1.6rem;

        &__name {
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }

        &__price {
          color: #797979;
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 2.5rem;
        }
      }
    }
    &__quantity {
      color: #797979;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2.5rem;
      text-align: right;
    }
  }

  .home-link {
    width: 100%;

    &__btn {
      width: 100%;
      margin-top: 2.3rem;

      @media (min-width: 768px) {
        margin-top: 4.6rem;
      }
    }
  }
}
</style>
