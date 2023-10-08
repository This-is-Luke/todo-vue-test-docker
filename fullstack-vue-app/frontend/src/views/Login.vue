<template>
    <form @submit.prevent="submitForm">
        <label>
            Username:
            <input v-model="username" type="text" required />
        </label>
        <label>
            Password:
            <input v-model="password" type="password" required />
        </label>
        <button type="submit">Login</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex' // import useStore from Vuex

export default defineComponent({
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    setup() {
        const router = useRouter()
        const store = useStore() // use the store here
        return { router, store } // return the store from setup
    },
    methods: {
        async submitForm() {
            if (this.username === 'admin' && this.password === 'admin') {
                this.store.commit('setAuthenticated', true) // use this.store instead of this.$store
                this.router.push('/')
            } else {
                alert('Incorrect username or password')
            }
        },
    },
})
</script>