<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<template>
    <div class="login-page">
        <h1>Login</h1>
        <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
        LoginForm,
    },
})
</script>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    margin-bottom: 1rem;
}
</style>
