<template>
  <Header />
  <main class="checkout">
    <p class="back-link" @click="$router.back()">Go back</p>

    <form class="checkout__form">
      <h1 class="checkout__form__heading">Checkout</h1>
      <h2 class="checkout__form__subheading">Billing details</h2>
      <div class="checkout__form__item">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="checkout__form__item">
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="checkout__form__item">
        <label for="phone">Phone number</label>
        <input type="tel" name="phone" id="phone" required />
      </div>
      <h2 class="checkout__form__subheading">Shipping info</h2>
      <div class="checkout__form__item">
        <label for="address">Your address</label>
        <input type="text" name="address" id="address" required />
      </div>
      <div class="checkout__form__item">
        <label for="zip">ZIP code</label>
        <input type="text" pattern="[0-9]*" name="zip" id="zip" required />
      </div>
      <div class="checkout__form__item">
        <label for="city">City</label>
        <input type="text" name="city" id="city" required />
      </div>
      <div class="checkout__form__item">
        <label for="country">Country</label>
        <input type="text" name="country" id="country" required />
      </div>
      <h2 class="checkout__form__subheading">Payment details</h2>
      <div class="checkout__form__item">
        <h3 class="label">Payment method</h3>
        <div
          :class="[
            'radio-container',
            picked === 'e-money' ? 'orange-border' : '',
          ]"
        >
          <input
            type="radio"
            id="e-money"
            name="payment-method"
            value="e-money"
            checked
            v-model="picked"
          />
          <label for="e-money" class="radio-label">e-money</label>
        </div>
        <div
          :class="['radio-container', picked === 'cash' ? 'orange-border' : '']"
        >
          <input
            type="radio"
            id="cash"
            name="payment-method"
            value="cash"
            v-model="picked"
          />
          <label for="cash" class="radio-label">Cash on Delivery</label>
        </div>
      </div>
      <div class="checkout__form__item" v-show="picked === 'e-money'">
        <label for="emoney-number" class="no-capitalize">e-Money Number</label>
        <input type="number" name="emoney-number" id="emoney-number" required />
      </div>
      <div class="checkout__form__item" v-show="picked === 'e-money'">
        <label for="emoney-pin" class="no-capitalize">e-Money PIN</label>
        <input type="number" name="emoney-pin" id="emoney-pin" required />
      </div>
    </form>
  </main>
</template>

<script>
import Header from "../components/ProductPage/Header.vue";

export default {
  name: "Checkout",
  components: { Header },
  data() {
    return {
      picked: "e-money",
    };
  },
};
</script>

<style lang="scss" scoped>
.back-link {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: #7d7d7d;
  margin: 1.6rem auto 2.4rem auto;
  display: block;
  cursor: pointer;
  width: 32.7rem;

  @media (min-width: 768px) {
    margin-top: 3.3rem;
  }

  @media (min-width: 1205px) {
    margin-top: 7.9rem;
  }
}

.checkout {
  background: #fafafa;
  width: 100%;

  &__form {
    margin: 2.4rem auto 0 auto;
    background: white;
    padding: 2.4rem 2.4rem 3.1rem 2.4rem;
    border-radius: 0.8rem;
    width: 32.7rem;

    &__heading {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.825rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    &__subheading {
      margin-top: 3.2rem;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 2.5rem;
      letter-spacing: 0.093rem;
      color: rgba(216, 125, 74, 1);
      margin-bottom: 1.6rem;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 2.4rem;

      &:first-child {
        margin-top: 0;
      }

      label,
      .label {
        margin-bottom: 0.9rem;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.639rem;
        letter-spacing: -0.021rem;
        text-transform: capitalize;
      }

      input {
        width: 28rem;
        height: 5.6rem;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1.912rem;
        letter-spacing: -0.025rem;
        padding-left: 2.4rem;
        border-radius: 0.8rem;
        color: #999999;
        border: 0.1rem solid #d5d5d5;

        &:focus {
          outline: none;
        }
      }

      .radio-container {
        display: flex;
        align-items: center;
        border-radius: 0.8rem;
        border: 0.1rem solid #d5d5d5;
        width: 28rem;
        height: 5.6rem;
        margin-top: 1.6rem;
      }

      input[type="radio"] {
        display: none;
      }

      input[type="radio"] + *::before {
        content: "";
        display: inline-block;
        vertical-align: bottom;
        width: 2rem;
        height: 2rem;
        margin-right: 1.6rem;
        border-radius: 50%;
        border-style: solid;
        border-width: 0.1rem;
        border-color: #d5d5d5;
      }

      input[type="radio"]:checked + *::before {
        background: radial-gradient(
          rgba(216, 125, 74, 1) 0%,
          rgba(216, 125, 74, 1) 40%,
          transparent 50%,
          transparent
        );
        border-color: #d5d5d5;
      }

      .radio-label {
        margin-bottom: 0;
        margin-left: 2.1rem;
        text-transform: none;
        display: flex;
        align-items: center;
      }

      .orange-border {
        border-color: rgba(216, 125, 74, 1) !important;
      }

      .no-capitalize {
        text-transform: none;
      }
    }
  }
}
</style>
