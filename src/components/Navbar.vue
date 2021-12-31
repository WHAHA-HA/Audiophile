<template>
  <nav class="navbar">
    <button class="navbar__mobile-menu-btn"></button>
    <router-link to="/" class="navbar__homeLink">
      <img
        src="../assets/shared/desktop/logo.svg"
        alt="audiophile logo"
        class="navbar__homeLink__logo"
    /></router-link>
    <button class="navbar__cart-btn"></button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 2.4rem;
  position: relative;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 3.7rem 4rem;
  }

  button {
    border: none;
  }

  &__mobile-menu-btn {
    background: url("../assets/shared/tablet/icon-hamburger.svg");
    width: 1.6rem;
    height: 1.5rem;
  }

  &__homeLink {
    display: flex;

    @media (min-width: 768px) {
      margin-left: 4.2rem;
    }
  }

  &__cart-btn {
    background: url("../assets/shared/desktop/icon-cart.svg");
    width: 2.3rem;
    height: 2rem;

    @media (min-width: 768px) {
      position: absolute;
      right: 4rem;
    }
  }
}
</style>
