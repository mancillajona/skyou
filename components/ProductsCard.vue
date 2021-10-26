<template>
  <nuxt-link :to="url" class="products__card__content">
    <img :src="require(`../assets/img/product.png`)">
    <h3>{{title}}</h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    imageCard: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      requied: false,
    },
    url: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss">
  .products {
    &__card {
      &__content {
        display: grid;
        justify-content: center;
        gap: var(--f-gutter);
        text-align: center;
        text-decoration: none;
        p, h3 {
          margin-bottom: 0;
        }
      }
    }
  }
</style>