<template>
    <div class="portfolio container">
        <h1 class="portfolio__title">PORTFOLIO</h1>
        <div class="portfolio__box">
            <div class="portfolio__box_block" v-for="item in store.user" :key="item">
                <a :href="item.html_url" class="portfolio__box_block_link">{{ item.name }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGithub } from '../stores/portfolio.js'

let store = useGithub();
let info = store.getUser();


</script>


