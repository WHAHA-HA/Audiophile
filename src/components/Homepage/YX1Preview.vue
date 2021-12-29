<template>
  <article class="preview">
    <img
      src="../../assets/home/mobile/image-earphones-yx1.jpg"
      alt=""
      class="preview__image"
    />
    <div class="div preview__text">
      <h2 class="preview__text__heading">YX1 Earphones</h2>
      <button class="preview__text__btn default-btn">See product</button>
    </div>
  </article>
</template>

<script>
export default { name: "YX1Preview" };
</script>

<style lang="scss" scoped>
.preview {
  margin: 2.4rem;

  &__image {
    width: 100%;
    border-radius: 0.8rem;
  }

  &__text {
    margin-top: 2.4rem;
    background: #f1f1f1;
    padding: 4.1rem 0 4.1rem 2.4rem;
    border-radius: 0.8rem;

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

      &:hover {
        background: black;
        color: white;
      }
    }
  }
}
</style>
