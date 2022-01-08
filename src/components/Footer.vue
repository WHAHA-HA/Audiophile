<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content__deco-bar"></div>
      <div class="footer__content__first-line">
        <img
          src="../assets/shared/desktop/logo.svg"
          alt="audiophile logo"
          class="footer__content__first-line__logo"
        />
        <ul class="footer__content__first-line__link-list">
          <li class="footer__content__first-line__link-list__link">
            <router-link @click="scrollToTop" to="/">Home</router-link>
          </li>
          <li class="footer__content__first-line__link-list__link">
            <router-link @click="scrollToTop" to="/category/headphones"
              >Headphones</router-link
            >
          </li>
          <li class="footer__content__first-line__link-list__link">
            <router-link @click="scrollToTop" to="/category/speakers"
              >Speakers</router-link
            >
          </li>
          <li class="footer__content__first-line__link-list__link">
            <router-link @click="scrollToTop" to="/category/earphones"
              >Earphones</router-link
            >
          </li>
        </ul>
      </div>
      <p class="footer__content__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div class="footer__content__copyright-section">
        <p class="footer__content__copyright-section__copyright-text">
          Copyright 2021. All Rights Reserved
        </p>
        <ul class="footer__content__copyright-section__social-media-links">
          <li
            class="footer__content__copyright-section__social-media-links__link"
          >
            <router-link to="#" aria-label="Go to our Facebook"
              ><i class="fab fa-facebook fa-2x"></i
            ></router-link>
          </li>
          <li
            class="footer__content__copyright-section__social-media-links__link"
          >
            <router-link to="#" aria-label="Go to our Twitter"
              ><i class="fab fa-twitter fa-2x"></i
            ></router-link>
          </li>
          <li
            class="footer__content__copyright-section__social-media-links__link"
          >
            <router-link to="#" aria-label="Go to our Instagram"
              ><i class="fab fa-instagram fa-2x"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 0 4rem 4.6rem 4rem;
  }

  * {
    color: white;
    text-align: center;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      margin: 0 auto;
      width: 68.9rem;
      align-items: flex-start;
    }

    @media (min-width: 1205px) {
      width: 111rem;
    }

    &__deco-bar {
      width: 10.1rem;
      height: 0.4rem;
      border-top: 0.4rem solid #d87d4a;
    }

    &__first-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      @media (min-width: 768px) {
        align-items: flex-start;
      }

      @media (min-width: 1205px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 7.1rem;
      }

      &__logo {
        margin: 4.8rem 0;

        @media (min-width: 768px) {
          margin: 5.6rem 0 3.2rem 0;
        }

        @media (min-width: 1205px) {
          margin: 0;
        }
      }

      &__link-list {
        @media (min-width: 768px) {
          display: flex;
          align-items: center;
        }

        &__link {
          margin-bottom: 1.6rem;
          font-weight: 700;
          font-size: 1.3rem;
          line-height: 2.5rem;
          letter-spacing: 0.2rem;
          text-transform: uppercase;

          * {
            transition: all 0.3s ease;
          }

          @media (min-width: 768px) {
            margin: 0;
            margin-right: 3.4rem;
          }

          &:hover * {
            color: #d87d4a;
          }

          &:last-child {
            margin-bottom: 0;
            margin-right: 0;
          }
        }
      }
    }

    &__text {
      margin: 4.8rem auto;
      color: #808080;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.5rem;
      width: 32.7rem;

      @media (min-width: 768px) {
        text-align: left;
        margin: 3.2rem 0 8rem 0;
        width: 68.9rem;
      }

      @media (min-width: 1205px) {
        width: 54rem;
      }
    }

    &__copyright-section {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
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

        @media (min-width: 768px) {
          margin: 0;
        }

        &__link {
          margin-right: 1.6rem;

          & i {
            transition: all 0.3s ease;
          }

          &:hover i {
            color: #d87d4a;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
