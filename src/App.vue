<template>
  <Menu
    :show="showMenu"
    :scrollTop="scrollTop"
    @toggle-menu-show="toggleMenu"
    ref="mobileMenu"
  />
  <Cart
    :show="showCart"
    :cart="cart"
    @change-quantity="changeQuantity"
    @empty-cart="emptyCart"
    @toggle-menu-show="toggleMenu"
  />
  <div :class="['wrapper', showMenu || showCart ? 'stop-scroll' : '']">
    <router-view
      @toggle-menu-show="toggleMenu"
      @add-to-cart="addToCart"
      :cart="cart"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
import Cart from "./components/Cart.vue";
import data from "./data.json";

export default {
  name: "App",
  components: { Footer, Menu, Cart },
  data() {
    return {
      showMenu: false,
      showCart: false,
      scrollTop: false,
      cart: JSON.parse(localStorage.getItem("cart")),
      products: data,
    };
  },
  methods: {
    toggleMenu(myVar) {
      if (myVar === "logo") {
        this.showMenu = false;
        this.showCart = false;
      } else if (myVar === "menu") {
        this.showMenu = !this.showMenu;
      } else if (myVar === "cart") {
        console.log("hello");
        this.showCart = !this.showCart;
      }
      this.scrollTop = !this.scrollTop;
    },
    storeCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addToCart(data) {
      console.log(data);
      let product = this.products.find(
        (product) => product.id === data.productId
      );
      if (this.cart.find((prod) => prod.id === product.id)) {
        const index = this.cart.findIndex((prod) => prod.id === product.id);
        this.cart[index] = {
          ...this.cart[index],
          addedQuantity: this.cart[index].addedQuantity + data.addedQuantity,
        };
      } else {
        product = { ...product, addedQuantity: data.addedQuantity };
        console.log("product", product);
        this.cart.push(product);
      }
      this.storeCart();
    },
    changeQuantity(data) {
      console.log("productId", data.productId);
      const index = this.cart.findIndex((prod) => prod.id === data.productId);
      if (data.operation === "subtract") {
        if (this.cart[index].addedQuantity === 1) {
          console.log("hello");
          this.cart = this.cart
            .slice()
            .filter((prod) => prod.id !== data.productId);
        } else {
          this.cart[index] = {
            ...this.cart[index],
            addedQuantity: this.cart[index].addedQuantity - 1,
          };
        }
      } else if (data.operation === "add") {
        this.cart[index] = {
          ...this.cart[index],
          addedQuantity: this.cart[index].addedQuantity + 1,
        };
      }
      this.storeCart();
    },
    emptyCart() {
      this.cart = [];
      this.storeCart();
    },
  },
  created() {
    let storedCart = localStorage.getItem("cart");
    storedCart = JSON.parse(storedCart);
    console.log("storedCart", storedCart);
    if (!storedCart) {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

html {
  font-size: 62.5%;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

.default-btn {
  background: #d87d4a;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.776rem;
  letter-spacing: 0.1rem;
  border: none;
  padding: 1.5rem 3rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f6af85;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.stop-scroll {
  max-height: calc(100vh - 9.1rem);
  overflow: hidden;
}
</style>
