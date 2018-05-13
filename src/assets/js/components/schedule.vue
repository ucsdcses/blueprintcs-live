<template>
    <list
        :name="name"
        listClass="tri-col"
        :items="schedule"
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
            name: 'schedule',
            classes: {
                left: 'time',
                middle: 'title',
                right: 'location'
            }
        };
    },
    props: {
        schedule: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="sass">
    @import '../../sass/global'

    .time
        min-width: 132px
        text-align: center
        font-weight: bold
        color: #6C93CC

    @media screen and (max-width: $small)
        .tri-col li
            width: fit-content
</style>
