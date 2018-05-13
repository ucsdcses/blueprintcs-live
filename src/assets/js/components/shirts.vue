<template>
  <list
    :name="name"
    listClass="dual-col"
    :items="shirts"
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
      name: 'shirts',
      classes: {
        left: 'person',
        right: 'color'
      }
    };
  },
  props: {
    shirts: {
      type: Array,
      required: true
    }
  },
  mounted() {
    let elems = Array.from(document.querySelectorAll('.color'));
    elems.forEach( el => {
      el.classList.add(el.innerText.toLowerCase());
    });
  }
}
</script>

<style lang="sass">
@import '../../sass/global'

.blue
  color: $blue

.gray
  color: #666666

.red
  color: #B3151E

.person, .color
  text-transform: capitalize
  font-size: 1.25em

.color
  font-weight: bold

</style>
