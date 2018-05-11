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

<style lang="sass" scoped>
    @media screen and (max-width: 576px)
        li
            width: fit-content
</style>
