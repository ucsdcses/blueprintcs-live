<template>
  <ul :class="listClass">
    <li v-for="(item, idx) in items" :key="name + idx">
      <span :class="classes.left">{{ item[classes.left] }}</span>
      <span v-if="classes.middle" :class="classes.middle">{{ item[classes.middle] }}</span>
      <span :class="classes.right">{{ item[classes.right] }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    listClass: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      required: true
    },
    classes: {
      type: Object,
      required: true
    }
  }
}
</script>
