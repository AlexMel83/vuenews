<style>
@import '../src/css/style.css';
</style>
<template>
  <SearchField />
  <Gallery :articles="articles" />
</template>

<script>
import { getTopHeadlines } from './utils/getTopHeadlines';
import Gallery from './components/Gallery.vue';

import SearchField from './components/SearchField.vue';
export default {
  name: 'App',
  components: {
    SearchField,
    Gallery,
  },
  data() {
    return {
      tables: null,
      articles: [],
    };
  },
  methods: {
    returner(value) {
      this.tables = value;
    },
  },

  async mounted() {
    const res = await getTopHeadlines();
    this.articles = res.data.articles;
  },
};
</script>
