<template>
    <div class="container gallery">
        <template v-for="article in articles" :key="article.published_at">
            <News :article='article' />
        </template>
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
        articles: []
    }
}
</script>

<style lang="scss" scoped>
.gallery {
    margin-top: 20px;

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
</style>