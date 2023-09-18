<style>
@import '../src/css/style.css';
</style>
<template>
  <SearchField v-on:send="transferData" />
  <Carousel :articles="articles" />
  <CategoryTabs v-on:currentCategory="setCurrentCategory" />
  <Gallery :articles="articles" v-on:currentPage="setCurrentPage" :category="currentCategory"/>
  <Footer />
</template>

<script>
import Carousel from './components/Carousel.vue';
import { getTopHeadlines } from './utils/getTopHeadlines';
import Gallery from './components/Gallery.vue';

import SearchField from './components/SearchField.vue';
import Footer from './components/Footer.vue';
import CategoryTabs from './components/CategoryTabs.vue';
export default {
  name: 'App',
  components: {
    SearchField,
    Gallery,
    Carousel,
    Footer,
    CategoryTabs,
  },
  data() {
    return {
      tables: null,
      DATA: null,
      articles: [],
      currentCategory: '',
      currentPage: 1,
    };
  },
  methods: {
    returner(value) {
      this.tables = value;
    },
    transferData(dat) {
      this.articles = dat.articles;
    },
    setCurrentCategory(currentCategory) {
      this.currentCategory = currentCategory;
      this.hydrateData();
    },
    setCurrentPage(currentPage) {
      this.currentPage = currentPage;
      this.hydrateData();
    },
    async hydrateData() {
      const res = await getTopHeadlines(this.currentCategory, this.currentPage);
      this.articles = res.data.articles;
    },
  },

  mounted() {
    this.currentCategory = 'general';
    this.hydrateData();
  },
};
</script>
