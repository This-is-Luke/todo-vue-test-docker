<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<template>
    <div class="todo-item">
        <input
            type="checkbox"
            v-model="item.completed"
            @change="toggleCompletion"
        />
        <span :class="{ completed: item.completed }">{{ item.name }}</span>
        <button @click="deleteItem">Delete</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import { ShoppingItem } from '@/types' // Import the ShoppingItem type

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
            store.dispatch('toggleItemCompletion', props.item.id) // Vuex action
        }

        const deleteItem = () => {
            store.dispatch('deleteItem', props.item.id) // Vuex action
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
