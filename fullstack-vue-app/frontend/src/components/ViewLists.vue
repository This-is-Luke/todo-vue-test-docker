<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="view-lists-container">
        <h1>View Lists</h1>
        <table>
            <thead>
                <tr>
                    <th>List Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in lists" :key="list.id">
                    <td>{{ list.name }}</td>
                    <td>
                        <button @click="viewList(list.id)">View</button>
                        <button @click="deleteList(list.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ViewLists',
    setup() {
        const lists = ref([
            { id: 1, name: 'Groceries' },
            { id: 2, name: 'Work Tasks' },
            // Add more lists here
        ])

        const viewList = (id: number) => {
            // Implement your logic to view a specific list
            console.log(`Viewing list with ID: ${id}`)
        }

        const deleteList = (id: number) => {
            // Implement your logic to delete a specific list
            console.log(`Deleting list with ID: ${id}`)
        }

        return {
            lists,
            viewList,
            deleteList,
        }
    },
})
</script>

<style scoped>
.view-lists-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
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
