<template>
  <footer class="footer">
    <div class="footer__deco-bar"></div>
    <img
      src="../assets/shared/desktop/logo.svg"
      alt="audiophile logo"
      class="footer__logo"
    />
    <ul class="footer__link-list">
      <li class="footer__link-list__link">
        <router-link to="#">Home</router-link>
      </li>
      <li class="footer__link-list__link">
        <router-link to="#">Headphones</router-link>
      </li>
      <li class="footer__link-list__link">
        <router-link to="#">Speakers</router-link>
      </li>
      <li class="footer__link-list__link">
        <router-link to="#">Earphones</router-link>
      </li>
    </ul>
    <p class="footer__text">
      Audiophile is an all in one stop to fulfill your audio needs. We're a
      small team of music lovers and sound specialists who are devoted to
      helping you get the most out of personal audio. Come and visit our demo
      facility - we’re open 7 days a week.
    </p>
    <p class="footer__copyright-text">Copyright 2021. All Rights Reserved</p>
    <ul class="footer__social-media-links">
      <li class="footer__social-media-links__link">
        <router-link to="#" aria-label="Go to our Facebook"
          ><i class="fab fa-facebook fa-2x"></i
        ></router-link>
      </li>
      <li class="footer__social-media-links__link">
        <router-link to="#" aria-label="Go to our Twitter"
          ><i class="fab fa-twitter fa-2x"></i
        ></router-link>
      </li>
      <li class="footer__social-media-links__link">
        <router-link to="#" aria-label="Go to our Instagram"
          ><i class="fab fa-instagram fa-2x"></i
        ></router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    color: white;
    text-align: center;
  }

  &__deco-bar {
    width: 10.1rem;
    height: 0.4rem;
    border-top: 0.4rem solid #d87d4a;
  }

  &__logo {
    margin: 4.8rem 0;
  }

  &__link-list {
    &__link {
      margin-bottom: 1.6rem;
      font-weight: 700;
      font-size: 1.3rem;
      line-height: 2.5rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      &:hover * {
        color: #d87d4a;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__text {
    margin: 4.8rem 2.4rem;
    color: #808080;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  &__copyright-text {
    color: #878787;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  &__social-media-links {
    display: flex;
    align-items: center;
    margin: 4.8rem 0 3.8rem 0;

    &__link {
      margin-right: 1.6rem;

      &:hover i {
        color: #d87d4a;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
