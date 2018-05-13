<template>
    <section :id="name">

        <template v-if="items.length">
            <box f-for="item in items" :class="{ full: full }" :name="item" />
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
import box from './box.vue';
export default {
    components: {
        box
    },
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
</style>
