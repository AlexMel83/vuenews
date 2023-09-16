<style>
@import '../src/css/style.css';
</style>
<template>
    <SearchField v-on:send="transferData" />
    <Carousel />
    <Gallery :articles="articles" />
</template>

<script>
import Carousel from './components/Carousel.vue';
import { getTopHeadlines } from './utils/getTopHeadlines';
import Gallery from './components/Gallery.vue';

import SearchField from './components/SearchField.vue';
export default {
    name: 'App',
    components: {
        SearchField,
        Gallery,
        Carousel
    },
    data() {
        return {
            tables: null,
            DATA: null,
            articles: [],
        };
    },
    methods: {
        returner(value) {
            this.tables = value
        },
        transferData(dat) {
            this.articles = dat

        }
    },

    async mounted() {
        const res = await getTopHeadlines();
        this.articles = res.data.articles;
    },
};
</script>
