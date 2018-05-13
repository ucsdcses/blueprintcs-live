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
    .time
        min-width: 132px
        text-align: center

    @media screen and (max-width: 576px)
        .tri-col li
            width: fit-content
</style>
