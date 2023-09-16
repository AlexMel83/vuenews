<style>
@import '../src/css/style.css';
</style>
<template>
    <SearchField v-on:send="transferData"/>
    <News :myData="this.DATA"/>
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
            tables: null,
            DATA:null
        }
    },
    methods: {
        returner(value) {
            this.tables = value
        },
        transferData(dat){
            this.DATA = dat
           
        }
        
    }
}
</script>

