<template>
  <Menu
    :show="show"
    :scrollTop="scrollTop"
    @toggle-menu-show="toggleMenu"
    ref="mobileMenu"
  />
  <Cart />
  <div :class="['wrapper', show ? 'stop-scroll' : '']">
    <router-view @toggle-menu-show="toggleMenu" />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: { Footer, Menu, Cart },
  data() {
    return {
      show: false,
      scrollTop: false,
    };
  },
  methods: {
    toggleMenu(myVar) {
      if (myVar === "logo") {
        this.show = false;
      } else {
        this.show = !this.show;
      }
      this.scrollTop = !this.scrollTop;
    },
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
  transition: all 0.3s ease;
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
