<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/order-in-components -->
<template>
    <div>
        <h1>Your Shopping Lists</h1>
        <ListOverview />
        <LogoutButton />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListOverview from '@/components/ListOverview.vue'
import LogoutButton from '@/components/LogoutButton.vue'

export default defineComponent({
    name: 'ViewLists',
    components: {
        ListOverview,
        LogoutButton,
    },
    setup() {
        // Any additional logic can go here
    },
})
</script>

<style scoped>
/* Add your styles here */
</style>
