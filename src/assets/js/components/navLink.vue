<template>
  <a
    :href="href"
    :class="{ external: !internal }"
    :target="internal ? '_self' : '_blank'">
    {{ name }}
    <font-awesome-icon v-if=!internal :icon="icon" />
  </a>
</template>

<script>
import fontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/fontawesome-free-solid';

export default {
  components: {
    fontAwesomeIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },

    href: {
      type: String,
      required: true
    },

    internal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon() {
      return faExternalLinkAlt;
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../sass/global'

  a
    display: block
    text-decoration: none
    color: $offwhite
    vertical-align: center
    padding: 0.75rem 0 0.75rem 1.5rem
    font-size: 1.25rem

    &:hover
      background-color: $darkblue

    &:visited
      color: $offwhite

    svg
      float: right
      margin-right: 1rem
</style>
