<template>
  <div class="home__what-we-offer__title-content">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    }
  }
}
</script>

<style lang="scss">
  .home__what-we-offer {
    &__title-content {
      display: grid;
      grid-template-columns: 24px 1fr;
      gap: var(--f-gutter);
      height: fit-content;
      img {
        height: 24px;
      }
    }
  }
</style>