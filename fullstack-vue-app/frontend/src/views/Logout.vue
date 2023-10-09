<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="container">
        <button @click="logout" class="logout-button">Logout</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex' // Import Vuex store

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Logout',
    setup() {
        const router = useRouter()
        const store = useStore() // Initialize Vuex store

        // Function to handle logout
        const logout = () => {
            store.commit('setAuthenticated', false) // Update Vuex store to set user as unauthenticated
            router.push('/login') // Redirect to login page
        }

        return {
            logout,
        }
    },
})
</script>

<style scoped>
/* Container to center the button */
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
}

/* Style for the logout button */
.logout-button {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    background-color: #f44336; /* A nice shade of red for emphasis */
    color: white;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.logout-button:hover {
    opacity: 0.8;
}
</style>
