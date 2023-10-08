<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- Registration Form -->
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input type="text" v-model="registerName" placeholder="Name" />
            <input type="email" v-model="registerEmail" placeholder="Email" />
            <input
                type="password"
                v-model="registerPassword"
                placeholder="Password"
            />
            <button type="submit">Register</button>
        </form>

        <!-- Navigation to Login Page -->
        <button @click="goToLogin">Already have an account? Login</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        // Registration data
        const registerName = ref('')
        const registerEmail = ref('')
        const registerPassword = ref('')

        // Vue Router
        const router = useRouter()

        // Registration logic
        const register = () => {
            // Your registration logic here
            console.log(`Registering ${registerName.value}`)
        }

        // Navigate to Login page
        const goToLogin = () => {
            router.push('/login')
        }

        return {
            registerName,
            registerEmail,
            registerPassword,
            register,
            goToLogin,
        }
    },
})
</script>
