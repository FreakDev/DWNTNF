
export interface IngredientRef {
  id: number
  name: string
  buyQte: number
}

export interface IngredientInRecipe {
  id: number
  qte: number
}

export interface ShoppingListItem {
  id: number
  qte: number
}

export interface StateData {
  meals: number[],
  shoppingList: ShoppingListItem[]
}

export interface Recipe {
  id: number
  name: string
  ingredients: IngredientInRecipe[]
}

export interface Action {
  toString: () => string
}

export type ChooseRecipeAction = Recipe & Action