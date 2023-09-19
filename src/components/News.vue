<template>
    <div class="card mb-3 p-3 my-card">
        <div class="container m-0 p-0 d-flex justify-content-between align-items-center mb-3">
            <span class="badge bg-secondary">{{ newsCategory }}</span>
            <span class="time">{{ article.publishedAt.substring(0, 10) }} at
                {{ article.publishedAt.substring(11, 16) }}</span>
        </div>
        <img :src="articleToImage()" class="" alt="" />
        <div class="card-body d-flex flex-column">
            <div class="d-flex container flex-column m-0 p-0">
                <h5 class="card-title">{{ article.title }}</h5>
                <button type="button" class="buttons" @click="readMore" data-bs-toggle="collapse" role="button"
                    :data-bs-target="'#t' + myid" :aria-controls="'t' + myid" aria-expanded="false">
                    Read {{ moreless }}
                </button>
            </div>
            <p class="collapse card-text" :id="'t' + myid">{{ article.content }}</p>
            <p class="card-text">
                <small class="text-body-secondary">
                    <a :href="article.url" target="_blank" class="link"><br />
                        Source: {{ article.source.name }}</a></small><small
                    class="text-body-secondary"><!-- Published: {{ article.publishedAt.substring(0, 10) }}--></small>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    props: {
        article: {
            type: Object,
        },
        myid: {
            type: Number,
        },
        newsCategory: String,
    },
    data: () => {
        return {
            descVisible: false,
            moreless: 'more',
        };
    },
    methods: {
        readMore() {
            if (this.article.content) {
                this.descVisible = !this.descVisible;
                this.moreless == 'more'
                    ? (this.moreless = 'less')
                    : (this.moreless = 'more');
            }
        },
        articleToImage() {
            return this.article.urlToImage ? this.article.urlToImage : "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="
        }
    },
};
</script>
<style lang="scss" scoped>
.buttons {
    margin-top: 10px;
    border: 1px solid rgb(25, 135, 84);
    border-radius: 20px;
    background: transparent;
    font-size: 14px;
    padding: 5px 20px;
    text-transform: capitalize;
    color: rgb(25, 135, 84);
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    width: 120px;

    &:hover,
    &:focus,
    &.active {
        background-color: rgb(25, 135, 84);
        color: white;
    }
}
</style>
