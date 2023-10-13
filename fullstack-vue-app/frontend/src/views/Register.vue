<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="container">
        <h1>Register</h1>
        <RegisterForm />
        <p>
            Already have an account?
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    components: {
        RegisterForm,
    },
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
}
</style>
