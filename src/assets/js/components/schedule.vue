<template>
    <table>
        <tr v-for="(row, idx) in items" :key="'sched' + idx">
            <td>{{ row.start }} - {{ row.end }}</td>
            <td><b>{{ row.title }}</b></td>
            <td>{{ row.location }}</td>
        </tr>
    </table>
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
table
    width: 95%
    margin-left: auto
    margin-right: auto
    font-size: 1rem

tr
    line-height: 2.5em

td
    &:first-child
        width: 25%
    &:last-child
        width: 20%
</style>
