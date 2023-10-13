<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="list-container">
        <h1>{{ listName }}</h1>
        <button @click="addItem" class="add-button">Add Item</button>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listItems" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>
                        <button @click="editItem(item.id)">Edit</button>
                        <button @click="deleteItem(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'List',
    setup() {
        const listName = ref('Sample List')
        const listItems = ref([
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            // Add more items here
        ])

        const addItem = () => {
            const newItem = {
                id: listItems.value.length + 1,
                name: `Item ${listItems.value.length + 1}`,
            }
            listItems.value.push(newItem)
        }

        const editItem = (id: number) => {
            const itemToEdit = listItems.value.find((item) => item.id === id)
            if (itemToEdit) {
                const newName = prompt('Edit item name:', itemToEdit.name)
                if (newName !== null) {
                    itemToEdit.name = newName
                }
            }
        }

        const deleteItem = (id: number) => {
            const indexToDelete = listItems.value.findIndex(
                (item) => item.id === id
            )
            if (indexToDelete !== -1) {
                listItems.value.splice(indexToDelete, 1)
            }
        }

        return {
            listName,
            listItems,
            addItem,
            editItem,
            deleteItem,
        }
    },
})
</script>

<style scoped>
.list-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

.add-button {
    float: right;
    margin-bottom: 20px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

button {
    margin-right: 10px;
    padding: 5px 10px;
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
