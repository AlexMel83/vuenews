<style>
@import '../src/css/style.css';
</style>
<template>
    <SearchField v-on:send="transferData" />
    <Carousel :articles="articles" />
    <Gallery :articles="articles" />
    <Footer />
</template>

<script>
import Carousel from './components/Carousel.vue';
import { getTopHeadlines } from './utils/getTopHeadlines';
import Gallery from './components/Gallery.vue';

import SearchField from './components/SearchField.vue';
import Footer from './components/Footer.vue';
export default {
    name: 'App',
    components: {
        SearchField,
        Gallery,
        Carousel,
        Footer
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
            this.articles = dat.articles.slice(0, 10)

        }
    },

    async mounted() {
        const res = await getTopHeadlines();
        this.articles = res.data.data;
    }
};
</script>
