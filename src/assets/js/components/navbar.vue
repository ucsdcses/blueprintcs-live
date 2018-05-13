<template>
  <nav>
    <header>
      <slot name="header"></slot>
      <div @click="navExpand" class="nav-expand hidden-desktop">
        <div class="hamburger"></div>
      </div>
    </header>
    <aside class="hide-mobile hidden-mobile">
      <slot></slot>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navExpand() {
        const hidden = Array.from(document.querySelectorAll('nav .hide-mobile'));
        hidden.forEach(elem => {
          elem.classList.toggle('hidden-mobile');
        });
      }
    }
  }
}
</script>

<style lang="sass">
  @import '../../sass/global'

  nav
    background: $blue
    grid-area: nav
    display: flex
    flex-direction: column
    position: fixed
    height: 100vh
    max-width: 17rem
    color: $offwhite

  .nav-logo
    padding: 0.75rem 0.75rem 0 0.75rem
    max-width: 17rem

  .nav-expand
    margin: 1.25rem 2rem 0 auto
    height: 2.5em
    width: 3.4em
    border: 1px solid white
    border-radius: 3px

  .hamburger
    position: relative
    top: -0.2em
    left: 0.85em

    &:before
      content: ""
      display: inline-block
      width: 1.7em
      height: 0.1em
      background: white
      box-shadow: 0 0.5em 0 0 white, 0 1em 0 0 white

  @media screen and (max-width: $medium)

    nav
      height: auto
      max-width: 100%
      overflow-y: hidden
      position: static

      header
        display: flex
        width: 100%
        flex-shrink: 0

    .nav-logo
      max-height: 5rem
      padding: 0

  @media screen and (max-width: $small)
    main
      margin: 0 0.5rem 0 0.5rem


</style>
