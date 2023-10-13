<!-- ListOverview.vue -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->

<template>
    <div class="list-overview">
        <h2>Your Shopping Lists</h2>
        <button @click="createNewList">Create New List</button>
        <ul>
            <li v-for="list in shoppingLists" :key="list.id">
                {{ list.name }}
                <button @click="viewList(list.id)">View</button>
                <button @click="deleteList(list.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

interface ShoppingList {
    id: number
    name: string
}

export default defineComponent({
    name: 'ListOverview',
    data() {
        return {
            shoppingLists: [] as ShoppingList[],
        }
    },
    mounted() {
        // Fetch the shopping lists from the API
        this.fetchLists()
    },
    methods: {
        async fetchLists() {
            const response = await axios.get('/api/shopping_lists')
            this.shoppingLists = response.data
        },
        async createNewList() {
            const newList = prompt('Enter the name of the new list:')
            if (newList) {
                await axios.post('/api/shopping_lists', { name: newList })
                this.fetchLists()
            }
        },
        viewList(id: number) {
            // Logic to view the list
            // This will typically navigate to the ListView component with the selected list ID
        },
        async deleteList(id: number) {
            await axios.delete(`/api/shopping_lists/${id}`)
            this.fetchLists()
        },
    },
})
</script>

<style scoped>
.list-overview ul {
    list-style-type: none;
}

.list-overview li {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
