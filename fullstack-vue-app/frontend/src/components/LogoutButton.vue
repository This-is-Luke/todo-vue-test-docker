<template>
    <button @click="logout" class="logout-button">Logout</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'LogoutButton',
    setup() {
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            // Trigger logout action from Vuex store
            store.dispatch('logout')
            // Redirect to login page
            router.push('/login')
        }

        return { logout }
    },
})
</script>

<style scoped>
.logout-button {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    background-color: #f44336;
    color: white;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

.logout-button:hover {
    opacity: 0.8;
}
</style>
