// Defining the ShoppingList interface, which serves as a contract for what a shopping list should contain
interface ShoppingList {
  id: number;          // Unique identifier for each shopping list, like a Social Security number but for shopping lists
  name: string;        // The name of the shopping list, could be something like "Weekly Groceries" or "Party Supplies"
  items: string[];     // An array of items in the shopping list, because what's a shopping list without items?
  user_id: number;     // New field to link the shopping list to a specific user, because shopping lists don't create themselves!
}
