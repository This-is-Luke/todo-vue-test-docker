<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="list-item-container">
        <h1>Edit Item: {{ item.item_name }}</h1>
        <form @submit.prevent="saveChanges">
            <input
                type="text"
                v-model="item.item_name"
                placeholder="Item Name"
            />
            <input
                type="number"
                v-model="item.quantity"
                placeholder="Quantity"
            />
            <input type="text" v-model="item.type" placeholder="Type" />
            <select v-model="item.status">
                <option value="Pending">Pending</option>
                <option value="Bought">Bought</option>
            </select>
            <button type="submit">Save Changes</button>
            <button @click="deleteItem">Delete Item</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
    setup() {
        // Sample item data, this should come from the parent component or an API call
        const item = ref({
            item_id: 1,
            item_name: 'Sample Item',
            quantity: 1,
            type: 'Grocery',
            status: 'Pending',
            userId: 1,
        })

        const saveChanges = async () => {
            // API call to update the item
            await axios.put(`/api/items/${item.value.item_id}`, item.value)
        }

        const deleteItem = async () => {
            // API call to delete the item
            await axios.delete(`/api/items/${item.value.item_id}`)
        }

        return {
            item,
            saveChanges,
            deleteItem,
        }
    },
})
</script>

<style scoped>
.list-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

input,
select {
    margin-bottom: 10px;
    padding: 5px;
}

button {
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
