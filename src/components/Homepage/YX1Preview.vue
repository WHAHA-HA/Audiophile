<template>
  <article class="preview">
    <div class="preview__image"></div>
    <div class="div preview__text">
      <h2 class="preview__text__heading">YX1 Earphones</h2>
      <router-link to="/product/yx1-earphones">
        <button class="preview__text__btn default-btn">See product</button>
      </router-link>
    </div>
  </article>
</template>

<script>
export default { name: "YX1Preview" };
</script>

<style lang="scss" scoped>
.preview {
  margin: 2.4rem auto 0 auto;
  width: 32.7rem;

  @media (min-width: 768px) {
    display: flex;
    height: 32rem;
    width: 68.9rem;
  }

  @media (min-width: 1205px) {
    width: 111rem;
  }

  &__image {
    width: 100%;
    border-radius: 0.8rem;
    background: url("../../assets/home/mobile/image-earphones-yx1.jpg");
    background-size: cover;
    height: 20rem;
    background-position: center;

    @media (min-width: 768px) {
      width: 50%;
      object-fit: cover;
      height: 100%;
      background: url("../../assets/home/tablet/image-earphones-yx1.jpg");
      background-size: cover;
      background-position: center;
    }

    @media (min-width: 1205px) {
      background: url("../../assets/home/desktop/image-earphones-yx1.jpg");
      background-size: cover;
      background-position: center;
    }
  }

  &__text {
    margin-top: 2.4rem;
    background: #f1f1f1;
    padding: 4.1rem 0 4.1rem 2.4rem;
    border-radius: 0.8rem;

    @media (min-width: 768px) {
      width: 50%;
      margin: 0;
      margin-left: 1.1rem;
      padding: 10.1rem 5.1rem 10.1rem 4.1rem;
    }

    @media (min-width: 1205px) {
      margin-left: 3rem;
      padding: 10.1rem 19.8rem 10.1rem 9.5rem;
    }

    &__heading {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.825rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }

    &__btn {
      margin-top: 3.2rem;
      background: none;
      color: black;
      border: 0.2rem solid black;
      transition: all 0.3s ease;

      &:hover {
        background: black;
        color: white;
      }
    }
  }
}
</style>
