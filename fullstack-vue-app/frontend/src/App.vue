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
