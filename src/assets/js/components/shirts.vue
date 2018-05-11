<template>
  <list
    :name="name"
    listClass="tri-col"
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

.blue
  color: blue

.gray
  color: gray

.red
  color: red

.person, .color
  text-transform: capitalize

</style>
