<template>
  <article class="preview">
    <img
      src="../../assets/home/mobile/image-speaker-zx9.png"
      alt="zx9 speaker"
      class="preview__thumbnail"
    />
    <h2 class="preview__header">ZX9 SPEAKER</h2>
    <p class="preview__description">
      Upgrade to premium speakers that are phenomenally built to deliver truly
      remarkable sound.
    </p>
    <router-link to="#" class="preview__link"
      ><button class="preview__link__btn default-btn">
        See Product
      </button></router-link
    >
  </article>
</template>

<script>
export default {
  name: "ZX9Preview",
};
</script>

<style lang="scss" scoped>
.preview {
  margin: 12rem 2.4rem 0 2.4rem;
  background: #d87d4a;
  background-image: url("../../assets/home/desktop/pattern-circles.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 5.5rem 2.4rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    text-align: center;
  }

  &__thumbnail {
    width: 17.225rem;
  }

  &__header {
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4rem;
    letter-spacing: 0.129rem;
    color: white;
  }

  &__description {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: white;
    margin-bottom: 2.4rem;
  }

  &__link {
    &__btn {
      background: black;

      &:hover {
        background: #4c4c4c;
      }
    }
  }
}
</style>
