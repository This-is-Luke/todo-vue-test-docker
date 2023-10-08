<template>
    <div>
        <button @click="logout">Logout</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex' // Import Vuex store

export default defineComponent({
    name: 'Logout',
    setup() {
        const router = useRouter()
        const store = useStore() // Initialize Vuex store

        const logout = () => {
            store.commit('setAuthenticated', false) // Update Vuex store
            router.push('/login') // Redirect to login page
        }

        return {
            logout,
        }
    },
})
</script>

<style scoped>
/* Add your styles here */
</style>
