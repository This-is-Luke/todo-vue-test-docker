<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div>Logging out...</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Logout',
    setup() {
        const store = useStore()
        const router = useRouter()

        // Trigger logout action from Vuex store
        store.dispatch('logout')

        // Redirect to login page
        router.push('/login')

        return {}
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
