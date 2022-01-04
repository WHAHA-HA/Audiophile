<template>
  <section class="about">
    <div class="about__image"></div>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin: 9.6rem 4rem;
  }

  &__image {
    width: 100%;
    border-radius: 0.8rem;
    background: url("../../assets/shared/mobile/image-best-gear.jpg");
    background-size: cover;
    background-position: top center;
    height: 30rem;

    @media (min-width: 768px) {
      background: url("../../assets/shared/tablet/image-best-gear.jpg");
      background-size: cover;
      background-position: center;
    }
  }

  &__heading {
    margin-top: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.825rem;
    letter-spacing: 0.1rem;

    @media (min-width: 768px) {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 0.143rem;
      width: 57.3rem;
      margin-top: 6.3rem;
    }

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

    @media (min-width: 768px) {
      width: 57.3rem;
    }
  }
}
</style>
