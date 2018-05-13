<template>
  <div>
      <a class="buttonLink" v-for="(link, idx) in links"
        :key="'link' + idx"
        :href="link.href">
        {{ link.name }}
      </a>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../sass/global'

div
  display: flex
  flex-flow: row wrap
  justify-content: center
  padding-left: 1rem
  padding-right: 1rem
  margin-bottom: 1rem

  a
    min-width: 40%
</style>
