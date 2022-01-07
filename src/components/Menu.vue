<template>
  <div :class="['overlay', show ? 'showElement' : 'hideElement']"></div>
  <div :class="['menu', show ? 'showElement' : 'hideElement']" ref="mobileMenu">
    <section class="categories">
      <Category
        product="headphones"
        :show="show"
        @toggle-menu-show="$emit('toggle-menu-show', $event)"
      />
      <Category
        product="speakers"
        :show="show"
        @toggle-menu-show="$emit('toggle-menu-show', $event)"
      />
      <Category
        product="earphones"
        :show="show"
        @toggle-menu-show="$emit('toggle-menu-show', $event)"
      />
    </section>
  </div>
</template>

<script>
import Category from "../components/Menu/Category.vue";

export default {
  name: "Menu",
  components: { Category },
  props: { show: Boolean, scrollTop: Boolean },
  emits: ["toggle-menu-show"],
  watch: {
    scrollTop() {
      this.$refs.mobileMenu.scrollTo(0, 0);
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

.menu {
  position: absolute;
  background: white;
  width: 100%;
  top: 9.1rem;
  padding: 8.4rem 0 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  opacity: 1;
  max-height: 75vh;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-height: auto;
    padding: 10.8rem 0 6.7rem 0;
  }

  @media (min-width: 1205px) {
    display: none !important;
  }
}

.categories {
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.showElement {
  display: flex;
}

.hideElement {
  display: none;
}
</style>
