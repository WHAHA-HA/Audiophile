<template>
  <section class="about">
    <img
      src="../../assets/shared/mobile/image-best-gear.jpg"
      alt="man listening to music in headphones"
      class="about__image"
    />
    <h2 class="about__heading">
      Bringing you the <span>best</span> audio gear
    </h2>
    <p class="about__text">
      Located at the heart of New York City, Audiophile is the premier store for
      high end headphones, earphones, speakers, and audio accessories. We have a
      large showroom and luxury demonstration rooms available for you to browse
      and experience a wide range of our products. Stop by our store to meet
      some of the fantastic people who make Audiophile the best place to buy
      your portable audio equipment.
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss" scoped>
.about {
  margin: 12rem 2.4rem;
  text-align: center;

  &__image {
    width: 100%;
    border-radius: 0.8rem;
  }

  &__heading {
    margin-top: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.825rem;
    letter-spacing: 0.1rem;

    & span {
      color: #d87d4a;
    }
  }

  &__text {
    margin-top: 3.2rem;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #7d7d7d;
  }
}
</style>
