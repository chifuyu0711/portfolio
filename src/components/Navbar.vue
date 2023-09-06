<template>
    <nav class="nav">
        <div class="nav__menu">
            <ul class="nav__menu_list">
                <li v-for="page in pages" :key="page.name">
                    <router-link :to="page.url" class="nav__menu_list_link">
                        <template v-if="page.img">
                            <img :src="page.img" alt=""> 
                        </template>
                        <template v-else>
                            <span>{{ page.name }}</span>
                        </template>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import homeIcon from '@/assets/images/home.svg'
import aboutIcon from '@/assets/images/about.svg'
import portfolioIcon from '@/assets/images/portfolio.svg'
import contactIcon from '@/assets/images/contact.svg'
import { ref } from 'vue'


const pages = ref([
    { img: homeIcon, url: '/', },
    { name: 'HOME', url: '/' },
    { img: aboutIcon, url: '/about' },
    { name: 'ABOUT ME', url: '/about' },
    { img: portfolioIcon, url: '/portfolio' },
    { name: 'PORTFOLIO', url: '/portfolio' },
    { img: contactIcon, url: '/contact' },
    { name: 'CONTACT', url: '/contact' }
])





</script>


