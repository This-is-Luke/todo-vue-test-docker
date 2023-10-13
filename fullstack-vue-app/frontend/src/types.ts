export interface ShoppingItem {
    id(arg0: string, id: any): unknown
    item_id: number
    item_name: string
    quantity: number
    type: string | null
    status: 'Pending' | 'Bought' | null
    userId: number | null
}
