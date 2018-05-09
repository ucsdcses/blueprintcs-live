<template>
    <section :id="name">

        <template v-if="items.length">
            <article v-for="item in items" :class="{ full: full }">
                <h1>{{ item }}</h1>
                <slot :name="item"></slot>
            </article>
        </template>

        <template v-else>
            <article :class="{ full: full }">
                <h1>{{ name }}</h1>
                <slot></slot>
            </article>
        </template>

    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            default: () => []
        },
        full: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../../sass/global'

    section
        display: flex
        flex-flow: row wrap
        justify-content: space-around
        align-items: flex-start
        align-content: flex-start

    article
        flex: 1 1 auto
        min-width: 48%
        max-width: 48%
        background: white
        border: 1px solid $darkblue
        border-radius: 5px
        box-shadow: 0 2px 16px $shadow
        margin-bottom: 2rem
        &.full
            max-width: 1200px
            min-width: 75%
            margin-left: auto
            margin-right: auto

    h1
        text-transform: capitalize

    @media screen and (max-width: 992px)

        article
            max-width: 1200px
            min-width: 75%
            margin-left: auto
            margin-right: auto

    @media screen and (max-width: 768px)

        article
            max-width: 720px
</style>
