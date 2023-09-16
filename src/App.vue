<style>
@import '../src/css/style.css';
</style>
<template>
    <SearchField />
    <div @send="returner">{{ tables }}</div>
</template>

<script>

import SearchField from './components/SearchField.vue'
export default {
    name: 'App',
    components: {
        SearchField
    },
    data() {
        return {
            tables: null
        }
    },
    methods: {
        returner(value) {
            this.tables = value
        }
    }
}
</script>

