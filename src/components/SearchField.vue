<template>
    <div class="header d-flex w-100">
        <h1>Vue-News by SIS</h1>
        <form @submit="subMetod">

            <input class="form-control" type="text" placeholder="Search for..." v-model="value">


        </form>
        <div>
            {{ data }}
        </div>
    </div>
</template>

<script>


export default {
    name: 'SearchComponent',
    data() {
        return {
           
            value: null,
            data: null
        }

    },
    methods: {
        subMetod(event) {
            event.preventDefault()
            this.getNews()

        },
        getNews() {
            var url = 'https://newsapi.org/v2/everything?' +
                `q=${this.value}&` +
                'from=2023-09-12&' +
                'sortBy=publishedAt&' +
                'apiKey=5e98e723c9374335a97bcb5599e40be9';

            var req = new Request(url);

            fetch(req, { method: 'GET' })
                .then(function (response) {
                    response.json()
                        .then((data) => { console.log(data.articles.slice(0, 10)) })
                        ;

                })
        }
    }
}
</script>