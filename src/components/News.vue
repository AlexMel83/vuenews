<template>
    <div class="card mb-3">
        <img :src="article.urlToImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text" v-if="descVisible">{{ article.description }}</p>
            <button type="button" class="btn btn-success" @click="readMore">Read {{ moreless }}</button>
            <p class="card-text" v-if="contentVisible">{{ article.content }}</p>
            <p class="card-text"><small class="text-body-secondary">Author: {{ article.author }}</small><small
                    class="text-body-secondary"> <a :href="article.url"> Source: {{ article.source.name }}</a></small><small
                    class="text-body-secondary"> Published: {{ article.publishedAt.substring(0, 10) }}</small></p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'News',
    props: {
        article: {
            type: Object
        }
    },
    data: () => {
        return {
            descVisible: true,
            contentVisible: false,
            moreless: 'more',
        }
    },
    methods: {
        readMore() {
            this.descVisible = !this.descVisible;
            this.contentVisible = !this.contentVisible;
            this.moreless == 'more' ? this.moreless = 'less' : this.moreless = 'more';
        }
    }
}
</script>