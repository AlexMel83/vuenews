<template>
    <div>
        <div id="carouselExample" class="carousel slide">

            <div class="carousel-indicators">
                <button v-for="(item, index) in newsArray" :key="index" :class="{ active: index === currentSlide }"
                    data-bs-target="#carouselExample" :data-bs-slide-to="index"></button>
            </div>

            <div class="carousel-inner">
                <div v-for="(item, index) in newsArray" :key="index" :class="{ active: index === currentSlide }"
                    class="carousel-item">

                    <img :src="item.urlToImage" class="d-block w-100">

                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                    </div>

                </div>
            </div>
            <button @click="prevSlide" class="carousel-control-prev">
                <span class="carousel-control-prev-icon"></span>
            </button>

            <button @click="nextSlide" class="carousel-control-next">
                <span class="carousel-control-next-icon"></span>
            </button>
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
            articleFilter: [],
            currentSlide: 0,
        }
    },
    methods: {
        nextSlide() {
            this.currentSlide++

            if (this.currentSlide >= this.newsArray.length) {
                this.currentSlide = 0
            }
        },

        prevSlide() {
            this.currentSlide--

            if (this.currentSlide < 0) {
                this.currentSlide = this.newsArray.length - 1
            }
        }
    }
}

</script>

<style>
.carousel-inner {
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.carousel-inner h5,
.carousel-inner p,
.carousel-indicators {
    background: radial-gradient(circle,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 80%);
}
</style>