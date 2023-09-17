<template>
    <div class="card mb-3">
        <img :src="article.image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <button type="button" class="btn btn-success" @click="readMore">Read {{ moreless }}</button>
            <p class="card-text" v-if="descVisible">{{ article.description }}</p>
            <p class="card-text"><small class="text-body-secondary">Author: {{ article.author }}</small><small
                    class="text-body-secondary"> <a :href="article.url"> Source: {{ article.source }}</a></small><small
                    class="text-body-secondary"> Published: {{ article.published_at.substring(0, 10) }}</small></p>
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
            descVisible: false,
            moreless: 'more',
        }
    },
    methods: {
        readMore() {
            this.descVisible = !this.descVisible;
            this.moreless == 'more' ? this.moreless = 'less' : this.moreless = 'more';
        },
    }
}
</script>