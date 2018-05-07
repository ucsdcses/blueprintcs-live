<template>
    <article :id="name">
        <h1>{{ name }}</h1>
        <slot></slot>
    </article>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../../sass/global'

    article
        background: white
        border: 1px solid $darkblue
        border-radius: 5px
        max-width: 1200px
        margin-left: auto
        margin-right: auto
        box-shadow: 0 2px 16px $shadow

    h1
        text-transform: capitalize

    @media screen and (max-width: 768px)

        article
            max-width: 720px
</style>
