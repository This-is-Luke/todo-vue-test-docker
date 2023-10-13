// types.ts
export interface ShoppingItem {
    item_id: number
    item_name: string
    quantity: number
    type: string | null
    status: 'Pending' | 'Bought' | null
    userId: number | null
}
