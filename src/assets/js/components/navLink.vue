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
