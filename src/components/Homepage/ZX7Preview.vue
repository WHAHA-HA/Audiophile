<template>
  <article class="preview">
    <h2 class="preview__header">ZX7 Speaker</h2>
    <button class="preview__btn default-btn">See product</button>
  </article>
</template>

<script>
export default { name: "ZX7Preview" };
</script>

<style lang="scss" scoped>
.preview {
  margin: 2.4rem;
  border-radius: 0.8rem;
  background: url("../../assets/home/mobile/image-speaker-zx7.jpg");
  padding: 10.1rem 0 10.1rem 2.4rem;
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background: url("../../assets/home/tablet/image-speaker-zx7.jpg");
    padding: 10.1rem 0 10.1rem 6.2rem;
  }

  &__header {
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
</style>
