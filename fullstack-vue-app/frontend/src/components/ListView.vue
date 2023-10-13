<!-- ListView.vue -->

<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/html-indent -->
<template>
    <div class="list-view">
        <ul>
            <li
                v-for="item in listItems"
                :key="item.item_id"
                :class="{ bought: item.status === 'Bought' }"
            >
                {{ item.item_name }} - {{ item.quantity }} - {{ item.type }}
                <button @click="toggleStatus(item)">
                    {{ item.status === 'Bought' ? 'Undo' : 'Bought' }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import axios from 'axios'

interface ListItem {
    item_id: number
    item_name: string
    quantity: number
    type: string
    status: 'Pending' | 'Bought'
    userId: number
}

export default defineComponent({
    name: 'ListView',
    props: {
        listItems: {
            type: Array as PropType<ListItem[]>,
            required: true,
        },
    },
    methods: {
        async toggleStatus(item: ListItem) {
            const newStatus = item.status === 'Bought' ? 'Pending' : 'Bought'
            // Update the database
            await axios.put(`/api/shopping_list/${item.item_id}`, {
                status: newStatus,
            })
            // Update the local state
            item.status = newStatus
        },
    },
})
</script>

<style scoped>
.list-view ul {
    list-style-type: none;
}

.list-view li {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.list-view li.bought {
    opacity: 0.5;
}
</style>
