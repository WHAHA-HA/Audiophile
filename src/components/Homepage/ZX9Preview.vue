<template>
  <article class="preview">
    <div class="preview__thumbnail"></div>
    <div class="preview__text">
      <h2 class="preview__text__header">ZX9 SPEAKER</h2>
      <p class="preview__text__description">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <router-link to="/product/zx9-speaker" class="preview__text__link"
        ><button class="preview__text__link__btn default-btn">
          See Product
        </button></router-link
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "ZX9Preview",
};
</script>

<style lang="scss" scoped>
.preview {
  margin: 12rem auto 0 auto;
  width: 32.7rem;
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
  overflow: hidden;

  @media (min-width: 768px) {
    margin-top: 9.6rem;
    width: 68.9rem;
  }

  @media (min-width: 1205px) {
    margin-top: 16.8rem;
    background-size: cover;
    background-position-x: -13rem;
    flex-direction: row;
    justify-content: center;
    width: 111rem;
  }

  * {
    text-align: center;
  }

  &__thumbnail {
    width: 17.225rem;
    height: 20.7rem;
    background: url("../../assets/home/mobile/image-speaker-zx9.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 768px) {
      background: url("../../assets/home/tablet/image-speaker-zx9.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      width: 19.7rem;
      height: 23.7rem;
    }
    @media (min-width: 1205px) {
      background: url("../../assets/home/desktop/image-speaker-zx9.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 41.023rem;
      height: 49.3rem;
      align-self: flex-end;
      position: relative;
      top: 6.7rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      width: 34.9rem;
    }

    @media (min-width: 1205px) {
      margin-left: 13.8rem;
      align-items: flex-start;
    }

    &__header {
      margin-top: 3.2rem;
      margin-bottom: 2.4rem;
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 4rem;
      letter-spacing: 0.129rem;
      color: white;

      @media (min-width: 768px) {
        font-size: 5.6rem;
        line-height: 5.8rem;
        letter-spacing: 0.2rem;
        width: 26rem;
      }

      @media (min-width: 1205px) {
        text-align: left;
      }
    }

    &__description {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: white;
      margin-bottom: 2.4rem;

      @media (min-width: 1205px) {
        text-align: left;
      }
    }

    &__link {
      &__btn {
        background: black;
        transition: all 0.3s ease;

        &:hover {
          background: #4c4c4c;
        }
      }
    }
  }
}
</style>
