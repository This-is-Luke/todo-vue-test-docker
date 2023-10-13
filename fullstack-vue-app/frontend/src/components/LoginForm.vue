<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const loginUser = () => {
    // Implement your login logic here
    console.log(`Logging in user: ${username.value}, ${password.value}`)
}
</script>
