<template>
  <dl>
    <template v-for="(prize, idx) in prizes">
      <dt :class="prize.criteria">{{ prize.criteria }}</dt>
      <dd :class="prize.prize">
        <template v-for="(p, i) in prize.prize">
          {{ prize.prize[i] }}<br />
        </template>
      </dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: {
    prizes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../sass/global'

  dl
    display: grid
    grid-template-columns: auto 1fr
    grid-gap: 1.5em
    line-height: 1.5em
    margin-left: auto
    margin-right: auto
    padding-left: 2rem
    padding-right: 2rem
    width: fit-content
  dt
    font-weight: bold
    grid-column: 1
    width: fit-content
    margin: 0
  dd
    grid-column: 2
    width: fit-content
    margin: 0

  @media screen and (max-width: $small)
    dl
      grid-template-columns: 1fr
      grid-gap: 0
    dd
      grid-column: 1
      margin-left: 1rem

      &:not(:last-child)
        margin-bottom: 1.5em
</style>
