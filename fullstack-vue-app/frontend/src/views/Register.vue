<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- Centered form container -->
    <div class="form-container">
        <form class="form-content" @submit.prevent="registerUser">
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
            <button type="submit" class="form-button">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    setup() {
        const router = useRouter()
        return { router }
    },
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async registerUser() {
            // Normally, you'd call an API to register the user
            // For now, let's just navigate to the login page
            this.router.push('/login')
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
