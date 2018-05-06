<script>
export default {
  props: ['name'],
  template: `
    <section :id="name">
      <h1>{{ name }}</h1>
      <slot></slot>
    </section>
  `
}
</script>
