<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<template>
    <!-- Centered form container -->
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form-content">
            <label class="form-label">
                Username:
                <input
                    v-model="username"
                    type="text"
                    required
                    class="form-input"
                />
            </label>
            <label class="form-label">
                Password:
                <input
                    v-model="password"
                    type="password"
                    required
                    class="form-input"
                />
            </label>
            // eslint-disable-next-line
            vue/singleline-html-element-content-newline,
            vue/singleline-html-element-content-newline
            <button type="submit" class="form-button">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    // eslint-disable-next-line vue/order-in-components
    setup() {
        const router = useRouter()
        const store = useStore()
        return { router, store }
    },
    methods: {
        async submitForm() {
            if (this.username === 'admin' && this.password === 'admin') {
                this.store.commit('setAuthenticated', true)
                this.router.push('/')
            } else {
                alert('Incorrect username or password')
            }
        },
    },
})
</script>

<style scoped>
/* Center the form container */
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Style the form content */
.form-content {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Style the form labels and inputs */
.form-label,
.form-input {
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
}

.form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* Style the form button */
.form-button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-button:hover {
    background-color: #45a049;
}
</style>
