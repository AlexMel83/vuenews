<style>
@import '../src/css/style.css';
</style>
<template>
    <SearchField />
    <News />
</template>

<script>
import News from './components/News.vue';

import SearchField from './components/SearchField.vue'
export default {
    name: 'App',
    components: {
        SearchField,
        News
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

