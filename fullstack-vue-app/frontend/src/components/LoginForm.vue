<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="login-form-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'LoginForm',
    setup() {
        const email = ref('')
        const password = ref('')

        const login = () => {
            // Implement your login logic here
            console.log('User logged in:', {
                email: email.value,
                password: password.value,
            })
        }

        return {
            email,
            password,
            login,
        }
    },
})
</script>

<style scoped>
.login-form-container {
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
