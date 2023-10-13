import { createStore } from 'vuex'

interface TodoItem {
    item_id: number
    item_name: string
    quantity: number
    type: string | null
    status: 'Pending' | 'Bought' | null
    userId: number | null
}

export default createStore({
    state: {
        todoItems: [] as TodoItem[], // Explicitly define the type here
    },
    mutations: {
        setTodoItems(state, items: TodoItem[]) {
            state.todoItems = items
        },
        addTodoItem(state, item: TodoItem) {
            state.todoItems.push(item)
        },
        deleteTodoItem(state, itemId: number) {
            state.todoItems = state.todoItems.filter(
                (item) => item.item_id !== itemId
            )
        },
        toggleItemCompletion(state, itemId: number) {
            const item = state.todoItems.find((item) => item.item_id === itemId)
            if (item) {
                item.status = item.status === 'Pending' ? 'Bought' : 'Pending'
            }
        },
    },
    actions: {
        // Here we'll add asynchronous actions that commit mutations
    },
    modules: {
        // If your store grows, you can split it into modules
    },
})
