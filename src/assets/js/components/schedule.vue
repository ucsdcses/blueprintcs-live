<template>
    <ul>
        <li v-for="(row, idx) in items" :key="'sched' + idx">
            <span>{{ row.start }} - {{ row.end }}</span>
            <span><b>{{ row.title }}</b></span>
            <span>{{ row.location }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/global'
ul
    list-style: none
    padding-left: 1rem
    padding-right: 1rem
    width: 100%
    font-size: 1rem

li
    line-height: 2.5em
    display: flex
    justify-content: space-between

span
    display: block

@media screen and (max-width: 576px)

    li
        flex-wrap: wrap
        align-items: center
        line-height: 1.5em
        width: fit-content
        margin-left: auto
        margin-right: auto
        margin-bottom: 1.5rem
        padding: 5px 3px

    span
        &:nth-child(2)
            order: -1
            flex: 1 0 100%
            text-align: center
</style>
