import { IngredientRef, Recipe, ChooseRecipeAction, StateData } from './types'

export const recipes: Recipe[] = [
  { id: 1, name: 'a', ingredients: [ { id: 1, qte: 1}, { id: 4, qte: 3}, { id: 7, qte: 2}, ] }, 
  { id: 2, name: 'b', ingredients: [ { id: 2, qte: 1}, { id: 5, qte: 5}, { id: 8, qte: 3}, ] }, 
  { id: 3, name: 'c', ingredients: [ { id: 3, qte: 1}, { id: 5, qte: 6}, { id: 8, qte: 4}, ] }, 
  { id: 4, name: 'd', ingredients: [ { id: 1, qte: 1}, { id: 5, qte: 3}, { id: 9, qte: 3}, ] }, 
  { id: 5, name: 'e', ingredients: [ { id: 3, qte: 1}, { id: 6, qte: 4}, { id: 7, qte: 2}, ] }, 
  { id: 6, name: 'f', ingredients: [ { id: 3, qte: 1}, { id: 6, qte: 7}, { id: 8, qte: 1}, ] }, 
  { id: 7, name: 'g', ingredients: [ { id: 2, qte: 1}, { id: 6, qte: 4}, { id: 8, qte: 2}, ] }, 
  { id: 8, name: 'h', ingredients: [ { id: 2, qte: 1}, { id: 4, qte: 5}, { id: 8, qte: 1}, ] }, 
  { id: 9, name: 'i', ingredients: [ { id: 3, qte: 1}, { id: 4, qte: 2}, { id: 9, qte: 1}, ] }, 
  { id: 10, name: 'j', ingredients: [ { id: 1, qte: 1}, { id: 4, qte: 3}, { id: 7, qte: 1}, ] }, 
  { id: 11, name: 'k', ingredients: [ { id: 2, qte: 1}, { id: 4, qte: 4}, { id: 7, qte: 4}, ] }, 
  { id: 12, name: 'l', ingredients: [ { id: 3, qte: 1}, { id: 5, qte: 4}, { id: 7, qte: 4}, ] }, 
  { id: 13, name: 'm', ingredients: [ { id: 1, qte: 1}, { id: 5, qte: 5}, { id: 7, qte: 6}, ] }, 
  { id: 14, name: 'n', ingredients: [ { id: 1, qte: 1}, { id: 6, qte: 3}, { id: 8, qte: 3}, ] }, 
  { id: 15, name: 'o', ingredients: [ { id: 2, qte: 1}, { id: 6, qte: 4}, { id: 9, qte: 4}, ] }, 
  { id: 16, name: 'p', ingredients: [ { id: 3, qte: 1}, { id: 4, qte: 5}, { id: 7, qte: 2}, ] }, 
  { id: 17, name: 'q', ingredients: [ { id: 3, qte: 1}, { id: 4, qte: 2}, { id: 8, qte: 1}, ] }, 
  { id: 18, name: 'r', ingredients: [ { id: 2, qte: 1}, { id: 4, qte: 3}, { id: 7, qte: 3}, ] }, 
  { id: 19, name: 's', ingredients: [ { id: 2, qte: 1}, { id: 5, qte: 5}, { id: 8, qte: 4}, ] }, 
  { id: 20, name: 't', ingredients: [ { id: 3, qte: 1}, { id: 5, qte: 6}, { id: 9, qte: 1}, ] }, 
  { id: 21, name: 'u', ingredients: [ { id: 2, qte: 1}, { id: 6, qte: 3}, { id: 7, qte: 1}, ] }, 
  { id: 22, name: 'v', ingredients: [ { id: 1, qte: 1}, { id: 6, qte: 2}, { id: 9, qte: 4}, ] }, 
]

export const ingredients: IngredientRef[] = [
  { id: 1, name: 'a', buyQte: 2 },
  { id: 2, name: 'w', buyQte: 5 },
  { id: 3, name: 'y', buyQte: 3 },
  { id: 4, name: 'd', buyQte: 5 },
  { id: 5, name: 'f', buyQte: 3 },
  { id: 6, name: 'r', buyQte: 6 },
  { id: 7, name: 't', buyQte: 4 },
  { id: 8, name: 'g', buyQte: 1 },
  { id: 9, name: 'e', buyQte: 3 },
]

export default (gameState:StateData) => recipes.filter( r => !gameState.meals.includes(r.id) ).map(
    (r: Recipe): ChooseRecipeAction => ({
        id: r.id,
        name: r.name,
        ingredients: r.ingredients,
        toString(): string {
            return this.id.toString()
        }
    })
)
