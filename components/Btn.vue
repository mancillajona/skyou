<template>
  <nuxt-link class="btn" :to="url" :class="[color]">
    {{label}}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url : {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: 'grey'
    },
    label: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
  .btn {
    padding: 11px var(--f-gutter);
    text-decoration: none;
    max-width: fit-content;
    &.blue {
      background: var(--color-primary-cyan-process);
      color: var(--color-neutral-10);
      border-radius: 4px;
      text-transform: capitalize;

      &:hover {
        opacity: 80%;
      }
      &:active {
        filter: brightness(90%);
      }
    }
    &.grey {
      background: var(--color-neutral-08);
      color: var(--color-neutral-03);
      border-radius: 4px;
    }
  }

</style>