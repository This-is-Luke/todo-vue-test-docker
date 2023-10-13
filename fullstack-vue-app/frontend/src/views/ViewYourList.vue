<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="list-container">
        <h1>Your Shopping List</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button @click="editItem(item)">Edit</button>
                <button @click="deleteItem(item.id)">Delete</button>
            </li>
        </ul>
        <div class="add-item">
            <input v-model="newItem" placeholder="Add new item" />
            <button @click="addItem">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// Define an interface for the item
interface Item {
    id: number
    name: string
}

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'List',
    setup() {
        const items = ref<Item[]>([
            { id: 1, name: 'Milk' },
            { id: 2, name: 'Bread' },
            { id: 3, name: 'Eggs' },
        ])
        const newItem = ref<string>('')

        const addItem = () => {
            const id = items.value.length
                ? Math.max(...items.value.map((i) => i.id)) + 1
                : 1
            items.value.push({ id, name: newItem.value })
            newItem.value = ''
        }

        // Specify the type for item parameter
        const editItem = (item: Item) => {
            const newName = prompt('Edit item name:', item.name)
            if (newName) {
                item.name = newName
            }
        }

        // Specify the type for id parameter
        const deleteItem = (id: number) => {
            items.value = items.value.filter((item) => item.id !== id)
        }

        return { items, newItem, addItem, editItem, deleteItem }
    },
})
</script>

<style scoped>
/* Container for the entire view */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
}

/* Style for each list item */
.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 12px;
    background-color: #f2f2f2;
}

/* Style for the input and button */
.input-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

input,
button {
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 12px;
}

button {
    cursor: pointer;
}
</style>
