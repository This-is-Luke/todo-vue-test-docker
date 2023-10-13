<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/order-in-components -->
<template>
    <div>
        <h1>Your Shopping Lists</h1>
        <ul>
            <li v-for="list in shoppingLists" :key="list.item_id">
                <span>{{ list.item_name }} ({{ list.quantity }})</span>
                <span>Status: {{ list.status }}</span>
                <button @click="editItem(list.item_id)">Edit</button>
                <button @click="deleteItem(list.item_id)">Delete</button>
            </li>
        </ul>
        <button @click="addItem">Add Item</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

interface ShoppingList {
    item_id: number
    item_name: string
    quantity: number
    type: string
    status: 'Pending' | 'Bought'
    userId: number
}

export default defineComponent({
    name: 'ViewLists',
    data() {
        return {
            shoppingLists: [] as ShoppingList[],
        }
    },
    // eslint-disable-next-line vue/order-in-components
    setup() {
        const store = useStore()
        return { store }
    },
    mounted() {
        // Fetch the shopping lists from the API and populate shoppingLists
        // For now, let's use dummy data
        this.shoppingLists = [
            {
                item_id: 1,
                item_name: 'Groceries',
                quantity: 2,
                type: 'Food',
                status: 'Pending',
                userId: 1,
            },
            {
                item_id: 2,
                item_name: 'Electronics',
                quantity: 1,
                type: 'Gadget',
                status: 'Bought',
                userId: 1,
            },
        ]
    },
    methods: {
        editItem(id: number) {
            // Implement edit logic here
        },
        deleteItem(id: number) {
            // Implement delete logic here
        },
        addItem() {
            // Implement add item logic here
        },
    },
})
</script>

<style scoped>
/* Your existing styles */
</style>
