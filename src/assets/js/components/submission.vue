<template>
  <div>
    <ul>
      <li v-for="(line, idx) in guidelines" :key="'guide' + idx">
        <font-awesome-icon :icon="icon" list-item />{{ line }}
      </li>
    </ul>
    <a class="submission buttonLink" :href="link.href">{{ link.name }}</a>
  </div>
</template>

<script>
import fontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';

export default {
  components: {
    fontAwesomeIcon
  },
  props: {
    guidelines: {
      type: Array,
      required: true
    },
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    icon() {
      return faCheck;
    }
  }
}
</script>

<style lang="sass" scoped>
  div
    display: flex
    flex-flow: column nowrap
    margin-bottom: 0.5rem

  ul
    margin-left: auto
    margin-right: auto
    width: fit-content

  li
    margin-left: 2.5em
    position: relative
    width: fit-content
    display: block

  svg
    margin-top: 0.65em

</style>
