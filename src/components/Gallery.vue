<template>
    <div class="container gallery">
        <template v-for="(article,index) in articles" :key="article.publishedAt">
            <News :article='article' v-if="article.urlToImage" :myid="index"/>
        </template>
    </div>

    <div class="button-set">
        <button @click="prevPage" :disabled="page === 1" class="btn btn-success">Previous</button>
        <button @click="nextPage" :disabled="page === 4" class="btn btn-success">Next</button>
    </div>
</template>

<script>
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
        }
    },
    emits:['currentPage'],
    methods: {
        prevPage() {
            this.page--
            window.scrollTo(0, 0)
            this.$emit('currentPage', this.page)
        },
        nextPage() {
            this.page++
            window.scrollTo(0, 0)
            this.$emit('currentPage', this.page)
        }
    },

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
}
</style>
