<template>
  <Header @toggle-menu-show="$emit('toggle-menu-show', $event)" />
  <Confirmation
    :cart="cart"
    :total="total + shipping"
    :showConfirmation="showConfirmation"
    @toggle-menu-show="$emit('toggle-menu-show', $event)"
    @empty-cart="$emit('empty-cart')"
  />
  <main class="checkout">
    <p class="back-link" @click="$router.back()">Go back</p>
    <form class="checkout__form" @submit.prevent="submitHandler" novalidate>
      <div class="checkout__form__input">
        <h1 class="checkout__form__input__heading">Checkout</h1>
        <h2 class="checkout__form__input__subheading">Billing details</h2>

        <section>
          <div class="checkout__form__input__item">
            <div class="input-texts">
              <label
                for="name"
                :class="emptyFields.includes('name') ? 'red-label' : ''"
                >Name</label
              >
              <p class="empty-message" v-if="emptyFields.includes('name')">
                Field can't be empty
              </p>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              ref="name"
              :class="emptyFields.includes('name') ? 'empty-border' : ''"
              @click="wipeError('name')"
              @change="wipeError('name')"
              spellcheck="false"
            />
          </div>
          <div class="checkout__form__input__item no-margin">
            <div class="input-texts">
              <label
                for="email"
                :class="emptyFields.includes('email') ? 'red-label' : ''"
                >Email address</label
              >
              <p class="empty-message" v-if="emptyFields.includes('email')">
                Field can't be empty
              </p>
              <p class="empty-message" v-if="invalidEmail">
                Invalid email address
              </p>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              ref="email"
              :class="emptyFields.includes('email') ? 'empty-border' : ''"
              @click="wipeError('email')"
              @change="wipeError('email')"
            />
          </div>
          <div class="checkout__form__input__item">
            <div class="input-texts">
              <label
                for="phone"
                :class="emptyFields.includes('phone') ? 'red-label' : ''"
                >Phone number</label
              >
              <p class="empty-message" v-if="emptyFields.includes('phone')">
                Field can't be empty
              </p>
            </div>

            <input
              type="tel"
              name="phone"
              id="phone"
              ref="phone"
              :class="emptyFields.includes('phone') ? 'empty-border' : ''"
              @click="wipeError('phone')"
              @change="wipeError('phone')"
            />
          </div>
        </section>
        <h2 class="checkout__form__input__subheading">Shipping info</h2>

        <section>
          <div class="checkout__form__input__item no-margin full-span">
            <div class="input-texts" id="address-texts">
              <label
                for="address"
                :class="emptyFields.includes('address') ? 'red-label' : ''"
                >Your address</label
              >
              <p class="empty-message" v-if="emptyFields.includes('address')">
                Field can't be empty
              </p>
            </div>

            <input
              type="text"
              name="address"
              id="address"
              ref="address"
              :class="emptyFields.includes('address') ? 'empty-border' : ''"
              @click="wipeError('address')"
              @change="wipeError('address')"
            />
          </div>
          <div class="checkout__form__input__item">
            <div class="input-texts">
              <label
                for="zip"
                :class="emptyFields.includes('zip') ? 'red-label' : ''"
                >ZIP code</label
              >
              <p class="empty-message" v-if="emptyFields.includes('zip')">
                Field can't be empty
              </p>
            </div>

            <input
              type="text"
              pattern="[0-9]*"
              name="zip"
              id="zip"
              ref="zip"
              :class="emptyFields.includes('zip') ? 'empty-border' : ''"
              @click="wipeError('zip')"
              @change="wipeError('zip')"
            />
          </div>
          <div class="checkout__form__input__item no-margin">
            <div class="input-texts">
              <label
                for="city"
                :class="emptyFields.includes('city') ? 'red-label' : ''"
                >City</label
              >
              <p class="empty-message" v-if="emptyFields.includes('city')">
                Field can't be empty
              </p>
            </div>

            <input
              type="text"
              name="city"
              id="city"
              ref="city"
              :class="emptyFields.includes('city') ? 'empty-border' : ''"
              @click="wipeError('city')"
              @change="wipeError('city')"
              spellcheck="false"
            />
          </div>
          <div class="checkout__form__input__item">
            <div class="input-texts">
              <label
                for="country"
                :class="emptyFields.includes('country') ? 'red-label' : ''"
                >Country</label
              >
              <p class="empty-message" v-if="emptyFields.includes('country')">
                Field can't be empty
              </p>
            </div>

            <input
              type="text"
              name="country"
              id="country"
              ref="country"
              :class="emptyFields.includes('country') ? 'empty-border' : ''"
              @click="wipeError('country')"
              @change="wipeError('country')"
              spellcheck="false"
            />
          </div>
        </section>
        <h2 class="checkout__form__input__subheading">Payment details</h2>

        <section>
          <div class="checkout__form__input__item payment-method">
            <h3 class="label">Payment method</h3>
            <div class="methods">
              <div
                :class="[
                  'radio-container',
                  picked === 'e-money' ? 'orange-border' : '',
                ]"
                @click="selectMethod('e-money')"
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
                :class="[
                  'radio-container',
                  picked === 'cash' ? 'orange-border' : '',
                ]"
                @click="selectMethod('cash')"
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
          </div>
          <div class="checkout__form__input__item" v-if="picked === 'e-money'">
            <div class="input-texts">
              <label for="emoney-number" class="no-capitalize"
                >e-Money Number</label
              >
              <p
                class="empty-message"
                v-if="emptyFields.includes('emoney-number')"
              >
                Field can't be empty
              </p>
            </div>

            <input
              type="number"
              name="emoney-number"
              id="emoney-number"
              ref="emoneyNumber"
              :class="
                emptyFields.includes('emoney-number') ? 'empty-border' : ''
              "
              @click="wipeError('emoney-number')"
              @change="wipeError('emoney-number')"
            />
          </div>
          <div
            class="checkout__form__input__item no-margin"
            v-if="picked === 'e-money'"
          >
            <div class="input-texts">
              <label for="emoney-pin" class="no-capitalize">e-Money PIN</label>
              <p
                class="empty-message"
                v-if="emptyFields.includes('emoney-pin')"
              >
                Field can't be empty
              </p>
            </div>

            <input
              type="number"
              name="emoney-pin"
              id="emoney-pin"
              ref="emoneyPin"
              :class="emptyFields.includes('emoney-pin') ? 'empty-border' : ''"
              @click="wipeError('emoney-pin')"
              @change="wipeError('emoney-pin')"
            />
          </div>
          <div class="cash-info" v-show="picked === 'cash'">
            <i class="fas fa-money-bill-wave cash-info__icon"></i>
            <p class="cash-info__text">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </section>
      </div>
      <div class="checkout__form__summary">
        <h2 class="checkout__form__summary__heading">Summary</h2>
        <div class="products">
          <div class="products__item" v-for="product in cart" :key="product.id">
            <div class="products__item__left">
              <img :src="editSrc(product)" :alt="product.name" />
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
            <p class="price__detail__value">
              $ {{ separator(total + shipping) }}
            </p>
          </div>
        </div>
        <input
          type="submit"
          :value="picked === 'e-money' ? 'Continue & pay' : 'Continue'"
          class="btn default-btn"
        />
      </div>
    </form>
  </main>
</template>

<script>
import Header from "../components/ProductPage/Header.vue";
import Confirmation from "../components/Checkout/Confirmation.vue";

export default {
  name: "Checkout",
  components: { Header, Confirmation },
  props: { cart: Array, showConfirmation: Boolean },
  emits: ["toggle-menu-show", "empty-cart"],
  data() {
    return {
      picked: "e-money",
      shipping: 50,
      emptyFields: [],
      invalidEmail: false,
    };
  },
  methods: {
    editSrc(product) {
      return require(`../${product.image.mobile.slice(2)}`);
    },
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    },
    selectMethod(method) {
      this.picked = method;
    },
    submitHandler() {
      const myRefs = [
        this.$refs.name,
        this.$refs.email,
        this.$refs.phone,
        this.$refs.address,
        this.$refs.zip,
        this.$refs.city,
        this.$refs.country,
      ];
      const eMoneyRefs = [this.$refs.emoneyNumber, this.$refs.emoneyPin];
      myRefs.map((ref) => {
        if (ref.value === "") {
          this.emptyFields.push(ref.name);
        }
      });
      if (this.picked === "e-money") {
        eMoneyRefs.map((ref) => {
          if (ref.value === "") {
            this.emptyFields.push(ref.name);
          }
        });
      }
      if (this.picked === "cash") {
        if (this.emptyFields.includes("emoney-number")) {
          this.wipeError("emoney-number");
        }
        if (this.emptyFields.includes("emoney-pin")) {
          this.wipeError("emoney-pin");
        }
      }
      this.validateEmail();
      if (this.emptyFields.length === 0 && !this.invalidEmail) {
        this.$emit("toggle-menu-show", "confirmation");
      }
    },
    wipeError(field) {
      if (this.emptyFields.includes(field)) {
        this.emptyFields = this.emptyFields.filter((ref) => ref !== field);
      }
      if (this.invalidEmail) {
        this.invalidEmail = false;
      }
    },
    validateEmail() {
      const email = this.$refs.email.value;
      const validationResult = email
        .toLowerCase()
        .match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
      if (!validationResult && !this.emptyFields.includes("email")) {
        this.invalidEmail = true;
      }
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
    vat() {
      return (0.2 * this.total).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
* input[type="number"]::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}

.back-link {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: #7d7d7d;
  margin: 1.6rem auto 2.4rem auto;
  display: block;
  cursor: pointer;
  width: 32.7rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(216, 125, 74, 1);
  }

  @media (min-width: 768px) {
    width: 68.9rem;
    margin-top: 3.3rem;
  }

  @media (min-width: 1205px) {
    margin-top: 7.9rem;
    width: 111rem;
    padding-left: 1rem;
  }
}

.empty-border {
  border: 0.2rem solid #ce382c !important;
}

.checkout {
  background: #fafafa;
  width: 100%;

  &__form {
    background: transparent;

    @media (min-width: 1205px) {
      display: flex;
      width: 111rem;
      margin: 0 auto;
      margin-top: 3.7rem;
      margin-bottom: 14.1rem;
    }

    &__input,
    &__summary {
      background: white;
    }

    section {
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
      }

      .no-margin {
        @media (min-width: 768px) {
          margin-right: 0 !important;
        }
      }

      .full-span {
        input {
          @media (min-width: 768px) {
            width: 63.4rem !important;
          }
        }
      }

      .payment-method {
        @media (min-width: 768px) {
          width: 63.4rem !important;
          display: flex;
          align-items: flex-start;
          flex-direction: row;

          h3,
          div {
            width: 30.9rem;
          }

          h3 {
            margin-right: 1.6rem;
          }

          .methods {
            div:first-child {
              margin-top: 0;
            }
          }
        }
      }
    }

    &__input {
      width: 32.7rem;
      margin: 2.4rem auto 0 auto;
      padding: 2.4rem 2.4rem 3.1rem 2.4rem;
      border-radius: 0.8rem;

      @media (min-width: 768px) {
        width: 68.9rem;
        padding: 3rem 2.7rem;
      }

      @media (min-width: 1205px) {
        margin: 0;
      }

      &__heading {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 3.825rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;

        @media (min-width: 768px) {
          font-size: 3.2rem;
          line-height: 3.6rem;
          letter-spacing: 0.114rem;
        }
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

        @media (min-width: 768px) {
          margin-top: 4.1rem;
        }
      }

      &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 2.4rem;

        &:first-child {
          margin-top: 0;
        }

        @media (min-width: 768px) {
          margin: 0;
          margin-bottom: 2.4rem;
          margin-right: 1.6rem;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .input-texts {
          display: flex;
          align-items: center;
          width: 28rem;
          justify-content: space-between;
          margin-bottom: 0.9rem;

          @media (min-width: 768px) {
            width: 30.9rem;
          }

          .red-label {
            color: rgba(205, 44, 44, 1) !important;
          }

          .empty-message {
            text-align: right;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.639rem;
            letter-spacing: -0.021rem;
            color: rgba(205, 44, 44, 1);
          }
        }

        #address-texts {
          @media (min-width: 768px) {
            width: 63.4rem;
          }
        }

        label,
        .label {
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
          caret-color: #dd8d61;
          transition: all 0.3s ease;

          &:hover {
            border-color: #dd8d61;
          }

          @media (min-width: 768px) {
            width: 30.9rem;
          }

          &:focus {
            outline: none;
            border-color: #dd8d61;
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
          cursor: pointer;
          transition: all 0.3s ease;

          * {
            cursor: pointer;
          }

          &:hover {
            border-color: #dd8d61;
          }
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
          cursor: pointer;
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

      .cash-info {
        display: flex;
        align-items: flex-start;
        margin-top: 3rem;

        @media (min-width: 768px) {
          align-items: center;
        }

        &__icon {
          font-size: 3rem;
          color: rgba(216, 125, 74, 1);
          margin-right: 3.2rem;
        }

        &__text {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 2.5rem;
          color: #808080;
        }
      }
    }

    &__summary {
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
        cursor: pointer;
      }
    }
  }
}
</style>
