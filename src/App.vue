<template>
    <Carousel />
    <News />
</template>

<script>
import Carousel from './components/Carousel.vue';
import News from './components/News.vue';

export default {
    name: 'App',
    components: {
        News,
        Carousel
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
