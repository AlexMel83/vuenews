<template>
    <div class="header d-flex w-100 bg-success">
        <h1 class="text-white">Vue-News by SIS-Team</h1>
        <form @submit="getNews">

            <input class="form-control" type="text" placeholder="Search for..." v-model="value">


        </form>
    </div>
</template>

<script>

const { VUE_APP_NEWS_API_KEY } = process.env;
export default {
    name: 'SearchComponent',
    data() {
        return {

            value: null,
            databox: null
        }

    },
    methods: {

        async getNews(event) {
            event.preventDefault()
            var url = 'https://newsapi.org/v2/everything?' +
                `q=${this.value}&` +
                'from=2023-09-12&' +
                'sortBy=publishedAt&' +
                `apiKey=${VUE_APP_NEWS_API_KEY}&` + 
                'pageSize=10';

            var req = new Request(url);

            const response = await fetch(req, { method: 'GET' })

            return await response.json()
                .then((dat) => {
                    this.databox = dat.articles
                    console.log(this.databox)
                    this.$emit('send', dat)
                })
                ;


        }
    }
}
</script>

<style></style>