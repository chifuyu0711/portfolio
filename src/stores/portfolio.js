import { defineStore } from "pinia";

export const useGithub = defineStore('github', {
    state: () => ({
        user: null 
    }),
    actions: {
        async getUser() {
            try {
                let response = await fetch('https://api.github.com/users/chifuyu0711/repos');
                let result = await response.json()
                this.user = result
            } catch (error) {
                console.log('Ошибка при получении данных из GitHub ' + error.message);
            }
        }
    }
})
