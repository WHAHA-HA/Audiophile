<template>
  <h1 class="heading">{{ category }}</h1>
</template>

<script>
export default {
  name: "Heading",
  props: { category: String },
};
</script>

<style lang="scss" scoped>
.heading {
  background: black;
  color: white;
  font-size: 2.8rem;
  line-height: 3.825rem;
  letter-spacing: 0.2rem;
  text-align: center;
  padding: 3.2rem 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 10.5rem 0 9.7rem 0;
    font-size: 4rem;
    line-height: 4.4rem;
    letter-spacing: 0.143rem;
  }
}
</style>
