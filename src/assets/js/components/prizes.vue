<template>
 <list
  :name="name"
  listClass="dual-col"
  :items="prizes"
  :classes="classes" />
</template>

<script>
import list from './list.vue';

export default {
  components: {
    list
  },
  data() {
    return {
      name: 'prizes',
      classes: {
        left: 'criteria',
        right: 'prize'
      }
    };
  },
  props: {
    prizes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
