<template>
  <article :class="{ full: full }">
    <h1>{{ name }}</h1>
    <slot></slot>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    full: {
        type: Boolean,
        default: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../sass/global'

article
  flex: 1 1 auto
  min-width: 48%
  max-width: 48%
  background: white
  border: 2px solid $lightblue
  border-radius: 5px
  box-shadow: 0 2px 16px $shadow
  margin-bottom: 2rem
  &.full
    max-width: 1000px
    min-width: 75%
    margin-left: auto
    margin-right: auto

h1
  font-family: $boxtitle
  text-transform: capitalize

@media screen and (max-width: 992px)

  article
    max-width: 1200px
    min-width: 75%
    margin-left: auto
    margin-right: auto

@media screen and (max-width: $medium)

  article
    max-width: 720px

</style>
