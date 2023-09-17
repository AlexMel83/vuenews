<template>
    <div  class="container">
    <div class="gallery">
        <template v-for="article in galleryArticles" :key="article.publishedAt">
            <News :article='article' />
        </template>
       
    </div>
    <div class="button-set">
   <button @click="prevPage" :disabled="page===1" class="btn btn-success">Previous</button>
   <button @click="nextPage" :disabled="page===4" class="btn btn-success">Next</button>
</div>
</div>
</template>

<script>
import { getTopHeadlines } from '@/utils/getTopHeadlines';
import News from './News.vue'
export default {
    name: 'Gallery',
    components: {
        News
    },
    props: {
        articles: Array,
    },
    data() {
        return {
            page: 1,
            galleryArticles: []
        }
    },
    methods: {
        prevPage(){
            this.page--
            window.scrollTo(0,0)
        },
        nextPage(){
            this.page++
            window.scrollTo(0,0)
        }
    },
    async updated() {
        const res = await getTopHeadlines(this.page)
        this.galleryArticles = res.data.articles
    }

}
</script>

<style lang="scss" scoped>
.gallery {
    margin-top: 50px;

    @media screen and (min-width: 678px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
.button-set {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }</style>