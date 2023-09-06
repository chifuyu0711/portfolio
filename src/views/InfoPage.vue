<template>
    <div class="about">
        <div class="about__box">
            <h1 class="about__box_title">ABOUT ME</h1>
            <h2 class="about__box_h2">
                My ambitions are powerless if I can't protect my captain. Luffy is the one who will become the Pirate King !!!
            </h2>
            <div class="about__box_item">
                <div class="about__box_item_left">
                    <div class="about__box_item_left_num"  v-for="item in info" :key="item.num">
                        <p>{{ item.num }}</p>
                    </div>
                </div>
                <div class="about__box_item_right">
                    <p class="about__box_item_right_text">
                        <span class="const">const</span> <span class="span">aboutMe</span> <span class="const">= {</span> 
                    </p>
                    <div class="info">
                        <p class="about__box_item_right_text">
                        name: <span>"Muxtorxon"</span>;
                        </p>
                        <p class="about__box_item_right_text">
                            surname: <span>"Saidalixanov"</span>;
                        </p>
                        <p class="about__box_item_right_text">
                            age: <span class="number">19</span>;
                        </p>
                        <a href="tel:+998909962956" class="about__box_item_right_text">
                            phoneNumber: <span class="number">+998 90 996-29-56</span>;
                        </a>
                        <a href="https://t.me/eren0711" class="about__box_item_right_text">
                            telegram: <span>"@eren0711"</span>;
                        </a>
                        <a href="https://instagram.com/aot_._eren?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" class="about__box_item_right_text">
                            insta: <span>"aot_._eren"</span>;
                        </a>
                        <p class="about__box_item_right_text">
                            e-mail: <span>"chifuyu0711@mail.com"</span>;
                        </p>
                        <p class="about__box_item_right_text">
                            adress: <span>"Tashkent"</span>;
                        </p>
                        <p class="about__box_item_right_text">
                            experience: <span>"1 year"</span>;
                        </p>
                    </div>
                    <p class="about__box_item_right_text">
                        <span class="const">}</span>
                    </p>
                    <p class="about__box_item_right_also">
                        // Also, I'm a very lazy person. I don't really like working. I just want to stay at home, play computer games and watch anime.
                    </p>
                    <p class="about__box_item_right_also">
                        // By the way, I like to play Genshin Impact. And from the anime, I like One PIece the most. Admit that One Piece is a legendary anime.
                    </p>
                    <p class="about__box_item_right_also">
                        // And that's all for now! Thank you very much for your interest ) !!!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const info = computed(() => {
    return [
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 4 },
        { num: 5 },
        { num: 6 },
        { num: 7 },
        { num: 8 },
        { num: 9 },
        { num: 10 },
        { num: 11 },
        { num: 12 },
        { num: 13 },
        { num: 14 },
        { num: 15 }
    ]
})




</script>

