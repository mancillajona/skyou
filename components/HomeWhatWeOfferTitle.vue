<template>
  <div class="home__what-we-offer__title-content">
    <slot name="icon"></slot>
    <slot name="title"></slot>
    <slot name="description"></slot>
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
@import "@lkmx/flare/src/functions/_respond-to.scss";
  .home__what-we-offer {
    &__title-content {
      display: grid;
      grid-template-columns: 24px 1fr;
      gap: var(--f-gutter);
      height: fit-content;
      padding: var(--f-gutter);
      img {
        height: 24px;
      }
      p:nth-of-type(2) {
        grid-column: 1 / 3;
      }
      height: 182px;
      @include respond-to("<=s") {
        height: auto;
      }
      h3, p {
        margin-bottom: 0;
        color: var(--color-neutral-10);
      } 
    }
  }
</style>