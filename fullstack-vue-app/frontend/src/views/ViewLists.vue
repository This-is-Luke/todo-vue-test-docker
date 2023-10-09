<!-- eslint-disable vue/order-in-components -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/order-in-components -->
<template>
    <div>
        <h1>Your Shopping Lists</h1>
        <ul>
            <li v-for="list in shoppingLists" :key="list.id">
                {{ list.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

interface ShoppingList {
    id: number
    name: string
}

export default defineComponent({
    name: 'ViewLists',
    data() {
        return {
            shoppingLists: [] as ShoppingList[], // Explicitly define the type here
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
            { id: 1, name: 'Groceries' },
            { id: 2, name: 'Electronics' },
        ]
    },
})
</script>
<style scoped>
/* Container to center everything */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
}

/* Style for the header */
h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Style for the list */
ul {
    list-style-type: none;
    padding: 0;
}

/* Style for each list item */
li {
    background-color: #f1f1f1;
    margin: 0.5rem 0;
    padding: 0.5rem;
    text-align: center;
    border-radius: 12px;
    width: 100%;
    max-width: 300px;
}
</style>
