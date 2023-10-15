<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-closing-bracket-spacing -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
    <nav>
        <router-link to="/list">List</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/logout">Logout</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/view-lists">View Lists</router-link>
    </nav>
    <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'App',
    data() {
        return {
            user: null,
            shoppingLists: [],
        }
    },
    methods: {
        fetchUser() {
            // Fetch user data from API or local storage
        },
        fetchShoppingLists() {
            // Fetch shopping lists for the user
        },
        logout() {
            // Logout logic
        },
    },
    // eslint-disable-next-line vue/order-in-components
    computed: {
        isLoggedIn() {
            return this.user !== null
        },
    },
    // eslint-disable-next-line vue/order-in-components
    mounted() {
        this.fetchUser()
        if (this.isLoggedIn) {
            this.fetchShoppingLists()
        }
    },
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
