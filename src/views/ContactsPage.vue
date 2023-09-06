<template>
    <div class="contact container">
        <h1 class="contact__title">CONTACT ME</h1>
        <div class="contact__item">
            <div class="contact__left">
                <input type="text" placeholder="YOUR NAME" class="contact__left_input" v-model="text">
                <input type="text" placeholder="YOUR EMAIL" class="contact__left_input" v-model="email">
                <textarea cols="30" rows="10" placeholder="YOUR MESSAGE..." class="contact__left_input2" v-model="message"></textarea>
                <button class="contact__left_btn" @click="add" :disabled="submitted">submit-message</button>
            </div>
            <div class="contact__right">
                <div class="contact__right_item">
                    <div v-for="item in info" :key="item.num">
                        <p>{{ item.num }}</p>
                    </div>
                </div>
                <div class="contact__right_info">
                    <p class="contact__right_info_text">
                        <span>const</span> button = document.querySelector( <span id="spn">'#sendBtn'</span> );
                    </p>
                    <div>
                        <p class="contact__right_info_text">
                            <span>const</span> massage = {
                        </p>
                        <div class="contact__right_info_div" v-for="item in userInfo" :key="item">
                            <p class="contact__right_info_text">
                                name: <span id="spn">'{{ item.name }}'</span>,
                            </p>
                            <p class="contact__right_info_text">
                                email: <span id="spn">'{{ item.email }}'</span>,
                            </p>
                            <p class="contact__right_info_text">
                                message: <span id="spn">'{{ item.message }}'</span>,
                            </p>
                        </div>
                        <p class="contact__right_info_text">}</p>
                    </div>
                    <div class="contact__right_info_bottom">
                        <p class="contact__right_info_text">
                            button.addEventListener( <span id="spn">'click'</span>, () => {
                        </p>
                        <p class="contact__right_info_text">
                            form.send(message);
                        </p>
                        <p class="contact__right_info_text">
                            })
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact__mail">
            <h2 class="contact__mail_title">find me in:</h2>
            <a href="https://t.me/eren0711">
                <img :src="telegramIcon" alt="">
            </a>
            <a href="https://instagram.com/aot_._eren?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                <img :src="instaIcon" alt="">
            </a>
            <a href="https://www.tiktok.com/@aot_._eren?_t=8fPcV5oAJBS&_r=1">
                <img :src="tiktokIcon" alt="">
            </a>
            <a href="https://www.facebook.com/muhtorhon?mibextid=b06tZ0">
                <img :src="facebookIcon" alt="">
            </a>
            <a href="tel:+998909962956">
                <img :src="phoneIcon" alt="">
            </a>
            <a href="https://github.com/chifuyu0711 ">
                <img :src="githubIcon" alt="">
            </a>
        </div>
    </div>
</template>

<script setup>
import telegramIcon from '@/assets/images/telegram.svg'
import instaIcon from '@/assets/images/instagram.svg'
import tiktokIcon from '@/assets/images/tiktok.svg'
import phoneIcon from '@/assets/images/phone.svg'
import githubIcon from '@/assets/images/github.svg'
import facebookIcon from '@/assets/images/facebook.svg'
import { ref, computed } from 'vue'

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
        { num: 11 }
    ]
})


let text = ref('')
const email = ref('')
const message = ref('')
const userInfo = ref([])
const submitted = ref(false)

    
const add = () => {
  if (!submitted.value) {
    if (text.value !== '' && email.value !== '') {
      userInfo.value.push({
        name: text.value,
        email: email.value,
        message: message.value
      })
      submitted.value = true // Устанавливаем флаг, что данные были отправлены

      // Очищаем значения инпутов после добавления данных
      text.value = ''
      email.value = ''
      message.value = ''
    }
  }
}




</script>
