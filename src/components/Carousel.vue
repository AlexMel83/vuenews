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
    data: () => {
        return {
            currentSlide: 0,
            newsArray: [
                {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Stephen Johnson",
                    "title": "You Can Transfer Music Between Spotify and Apple Music",
                    "description": "I recently posted about the best music streaming service for different kinds of people, and it made me realize that the reason I stick with Spotify isn’t because it’s the best or I love it so much. It’s because I have a playlist consisting of 1,823 songs I’ve…",
                    "url": "https://lifehacker.com/you-can-transfer-music-between-spotify-and-apple-music-1850835932",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/72c6c3c0f134993ecf745e53e5e41c8f.jpg",
                    "publishedAt": "2023-09-14T12:30:00Z",
                    "content": "I recently posted about the best music streaming service for different kinds of people, and it made me realize that the reason I stick with Spotify isnt because its the best or I love it so much. Its… [+2330 chars]"
                }, {
                    "source": {
                        "id": null,
                        "name": "Lifehacker.com"
                    },
                    "author": "Pranay Parab",
                    "title": "The Most Interesting iPhone 15 Features Most People Missed",
                    "description": "Although Apple’s ‘Wonderlust’ event was jam-packed with information about the Apple Watch, iPhone 15 and 15 Pro, and the USB-C AirPods Pro, the company still left out a lot of useful information in the keynote. If you’re wondering what else is worth knowing a…",
                    "url": "https://lifehacker.com/the-most-interesting-iphone-15-features-most-people-mis-1850835003",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/added8281940c9f608b61b4ef8f738d5.jpg",
                    "publishedAt": "2023-09-13T22:00:00Z",
                    "content": "Although Apples Wonderlust event was jam-packed with information about the Apple Watch, iPhone 15 and 15 Pro, and the USB-C AirPods Pro, the company still left out a lot of useful information in the … [+2410 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Kris Holt",
                    "title": "Everything announced at today's Apple event: iPhone 15, USB-C, Apple Watch Series 9 and more",
                    "description": "Apple's 2023 iPhone event came and went almost in the blink of an eye. As always, the company had a bunch of new devices to show off during the \"Wonderlust\" showcase but thanks to long-standing rumors, there weren't too many major surprises. On the phone fron…",
                    "url": "https://www.engadget.com/everything-announced-at-todays-apple-event-iphone-15-usb-c-apple-watch-series-9-and-more-200111613.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-09/de570cb0-51a3-11ee-bb5f-bc58227716e7",
                    "publishedAt": "2023-09-12T20:01:11Z",
                    "content": "Apple's 2023 iPhone event came and went almost in the blink of an eye. As always, the company had a bunch of new devices to show off during the \"Wonderlust\" showcase but thanks to long-standing rumor… [+8380 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Kris Holt",
                    "title": "For All Mankind returns to Apple TV+ on November 10",
                    "description": "Apple TV+\r\n has some intriguing TV series on hand to keep you occupied this fall. Along with the return of The Morning Show and the debut of a show that features Godzilla\r\n, the captivating For All Mankind\r\n is about to set sail on its fourth season. New epis…",
                    "url": "https://www.engadget.com/for-all-mankind-returns-to-apple-tv-on-november-10-171532673.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gX4T6r5NRoGP5yCB0fQtqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/5e8ff870-5257-11ee-8575-52bdd20e1ed9",
                    "publishedAt": "2023-09-13T17:15:32Z",
                    "content": "Apple TV+\r\n has some intriguing TV series on hand to keep you occupied this fall. Along with the return of The Morning Show and the debut of a show that features Godzilla\r\n, the captivating For All M… [+787 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Jessica Conditt",
                    "title": "Apple Watch Series 9 can handle Siri requests without your iPhone",
                    "description": "It's September, which means the air is thick with the promise of fall, school is back in session, and Apple just revealed a new Apple Watch. This year, the company is showing off the Apple Watch Series 9. The Series 9 features a new processor, the S9 chip, an…",
                    "url": "https://www.engadget.com/apple-watch-series-9-can-handle-siri-requests-without-your-iphone-171920001.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EAIAyDgp2kk7COYX5i.Hgg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/7d7707b0-518f-11ee-9f7e-4813ed0438c8",
                    "publishedAt": "2023-09-12T17:19:20Z",
                    "content": "It's September, which means the air is thick with the promise of fall, school is back in session, and Apple just revealed a new Apple Watch. This year, the company is showing off the Apple Watch Seri… [+2086 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Kris Holt",
                    "title": "Everything announced at Apple's fall event: iPhone 15, USB-C, Apple Watch Series 9 and more",
                    "description": "Apple's 2023 iPhone event came and went almost in the blink of an eye. As always, the company had a bunch of new devices to show off during the \"Wonderlust\" showcase but thanks to long-standing rumors, there weren't too many major surprises. On the phone fron…",
                    "url": "https://www.engadget.com/everything-announced-apple-event-2023-iphone-15-usb-c-apple-watch-series-9-200111503.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-09/de570cb0-51a3-11ee-bb5f-bc58227716e7",
                    "publishedAt": "2023-09-12T20:01:11Z",
                    "content": "Apple's 2023 iPhone event came and went almost in the blink of an eye. As always, the company had a bunch of new devices to show off during the \"Wonderlust\" showcase but thanks to long-standing rumor… [+8632 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Kris Holt",
                    "title": "Apple will keep using Qualcomm's 5G tech in iPhones until at least 2026",
                    "description": "On the eve of Apple's big fall iPhone event\r\n, Qualcomm announced it will continue to provide the company with 5G smartphone modems through 2026. It’s an indication that while Apple has successfully scaled up its chipset manufacturing efforts\r\n and ended its …",
                    "url": "https://www.engadget.com/apple-will-keep-using-qualcomms-5g-tech-in-iphones-until-at-least-2026-143702711.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kEKU8bTz6fgwihVwmHEecQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTc-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0",
                    "publishedAt": "2023-09-11T14:37:02Z",
                    "content": "On the eve of Apple's big fall iPhone event\r\n, Qualcomm announced it will continue to provide the company with 5G smartphone modems through 2026. Its an indication that while Apple has successfully s… [+1153 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Kris Holt",
                    "title": "Assassin's Creed Mirage, Death Stranding and Resident Evil Village are coming to iPhone 15 Pro",
                    "description": "The iPhone 15 Pro is getting a performance boost thanks to a new chipset. That's not too much of a surprise since Apple upgrades its phones' components every year. One thing we didn't expect, however, is the games that the A17 Pro will be able to support. App…",
                    "url": "https://www.engadget.com/assassins-creed-mirage-death-stranding-and-resident-evil-village-are-coming-to-iphone-15-pro-183325896.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zilsH1c77Oqefp.H8BbmMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/3caf4670-5199-11ee-bf3f-d4673beffea4",
                    "publishedAt": "2023-09-12T18:33:25Z",
                    "content": "The iPhone 15 Pro is getting a performance boost thanks to a new chipset. That's not too much of a surprise since Apple upgrades its phones' components every year. One thing we didn't expect from tod… [+1133 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Nathan Ingraham",
                    "title": "Apple discontinues the iPhone 13 mini, its last small phone worth owning",
                    "description": "The writing was on the wall for the iPhone mini series last year, when Apple went to a bigger Plus size of the iPhone 14 instead of the mini model it offered for the iPhone 12 and 13. But now, Apple has discontinued the iPhone 13 mini entirely, a tough blow f…",
                    "url": "https://www.engadget.com/apple-discontinues-the-iphone-13-mini-its-last-small-phone-worth-owning-184836048.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gVHjMEjXmMpuP8mL_W_qkA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/d8612550-519b-11ee-bdde-27e1c83d7e2e",
                    "publishedAt": "2023-09-12T18:48:36Z",
                    "content": "The writing was on the wall for the iPhone mini series last year, when Apple went to a bigger Plus size of the iPhone 14 instead of the mini model it offered for the iPhone 12 and 13. But now, Apple … [+1005 chars]"
                }, {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Devindra Hardawar",
                    "title": "Engadget Podcast: Diving into the iPhone 15 and Apple Watch Series 9",
                    "description": "Fresh off of Apple’s “Wanderlust” event, Devindra and Engadget Editor-in-Chief Dana Wollman dive into the iPhone 15, iPhone 15 Pro and the Apple Watch Series 9. We explain why Apple’s move towards USB-C on the iPhones has been a long time coming, and why we’r…",
                    "url": "https://www.engadget.com/engadget-podcast-iphone-15-apple-watch-series-9-203022213.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
                    "publishedAt": "2023-09-12T20:30:22Z",
                    "content": "Fresh off of Apples Wanderlust event, Devindra and Engadget Editor-in-Chief Dana Wollman dive into the iPhone 15, iPhone 15 Pro and the Apple Watch Series 9. We explain why Apples move towards USB-C … [+572 chars]"
                }
            ]
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