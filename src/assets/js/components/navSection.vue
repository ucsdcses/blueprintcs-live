<template>
  <section :id="name">
    <h1>{{ name }}</h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style lang="sass" scoped>
    @import '../../sass/global'

    h1
        font-family: $title
        padding-left: 1rem
        text-transform: uppercase
        font-size: 0.9rem
        margin-bottom: 0.25rem
        font-size: 0.9rem
</style>
