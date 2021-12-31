<template>
  <div class="wrapper">
    <div class="pageContent">
      <Header />
      <main>
        <section class="categories">
          <Category product="headphones" />
          <Category product="speakers" />
          <Category product="earphones" />
        </section>
        <ZX9Preview />
        <ZX7Preview />
        <YX1Preview />
        <AboutSection />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Homepage/Header.vue";
import Category from "../components/Homepage/Category.vue";
import ZX9Preview from "../components/Homepage/ZX9Preview.vue";
import ZX7Preview from "../components/Homepage/ZX7Preview.vue";
import YX1Preview from "../components/Homepage/YX1Preview.vue";
import AboutSection from "../components/Homepage/AboutSection.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Category,
    ZX9Preview,
    ZX7Preview,
    YX1Preview,
    AboutSection,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.categories {
  padding: 9.2rem 2.4rem 0 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 9.6rem 4rem 0 4rem;
    padding: 9.6rem 4rem 0 4rem;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
