<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<!-- TodoItem.vue -->
<template>
    <div class="todo-item">
        <input
            type="checkbox"
            :checked="item.status === 'Bought'"
            @change="toggleCompletion"
        />
        <span :class="{ completed: item.status === 'Bought' }">{{
            item.item_name
        }}</span>
        <button @click="deleteItem">Delete</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import { ShoppingItem } from '@/types' // Import the TodoItem type

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<ShoppingItem>,
            required: true,
        },
    },
    setup(props) {
        const store = useStore()

        const toggleCompletion = () => {
            store.commit('toggleItemCompletion', props.item.item_id) // Vuex mutation
        }

        const deleteItem = () => {
            store.commit('deleteTodoItem', props.item.item_id) // Vuex mutation
        }

        return {
            toggleCompletion,
            deleteItem,
        }
    },
})
</script>

<style scoped>
.todo-item {
    display: flex;
    align-items: center;
}

.completed {
    text-decoration: line-through;
}
</style>
