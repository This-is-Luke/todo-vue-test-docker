<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" />
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'RegisterForm',
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')

        const register = () => {
            // Implement your registration logic here
            console.log('User registered:', {
                username: username.value,
                email: email.value,
                password: password.value,
            })
        }

        return {
            username,
            email,
            password,
            register,
        }
    },
})
</script>

<style scoped>
.register-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
