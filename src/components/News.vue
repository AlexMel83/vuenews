<template>
    <div class="container">

        <div class="card mb-3" v-for="item in newsArray" :key="item.title">
            <img :src="item.urlToImage" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text" v-if="descVisible">{{ item.description }}</p>
                <button type="button" class="btn btn-success" @click="readMore">Read {{ moreless }}</button>
                <p class="card-text" v-if="contentVisible">{{ item.content }}</p>
                <p class="card-text"><small class="text-body-secondary">Author: {{ item.author }}</small><small
                        class="text-body-secondary"> <a :href="item.url"> Source: {{ item.source.name }}</a></small><small
                        class="text-body-secondary"> Published: {{ item.publishedAt.substring(0, 10) }}</small></p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'News',
    props:{
        myData:{
            type:Object
        }
    },
    data: () => {
        return {
            descVisible: true,
            contentVisible: false,
            moreless: 'more',
            newsArray: [
                
            ]
        }
    },
    methods: {
        readMore() {
            this.descVisible = !this.descVisible;
            this.contentVisible = !this.contentVisible;
            this.moreless == 'more' ? this.moreless = 'less' : this.moreless = 'more';
        },
       
    },
    updated(){
        this.newsArray = this.myData.articles.slice(0,10)
    }
}
</script>