import createState from './state';
import { recipes, ingredients } from './actions'
import { IngredientRef, Recipe, ShoppingListItem, StateData } from './types';

export const calcLeftOver = (state:StateData): ShoppingListItem[] => {
  const leftOver = state.shoppingList.map(e => ({ id: e.id, qte:e.qte }))

  state.meals.forEach(r => {
    const recRef: Recipe|undefined = recipes.find(ref => ref.id === r)

    if (recRef)
      recRef.ingredients.forEach(ingred => {
        const i = leftOver.findIndex(iLeftOver => iLeftOver.id === ingred.id)

        leftOver[i].qte = leftOver[i].qte - ingred.qte
      })
  });

  return leftOver
}

export const addRecipe = (state: StateData, recipe: Recipe): StateData => {
  const shoppingList = state.shoppingList.map(e => ({ id:e.id, qte:e.qte }))

  const leftOver = calcLeftOver(state)
  recipe.ingredients.forEach(ingred => {
    const ingredRef:IngredientRef|undefined = ingredients.find(iref => iref.id === ingred.id)
    
    if (ingredRef) {
      let i = leftOver.findIndex(iLeftOver => iLeftOver.id === ingred.id)
      let qteToAdd = 0
      if (i === -1) {
        while (qteToAdd < ingred.qte) qteToAdd += ingredRef.buyQte
        shoppingList.push({ id:ingredRef.id, qte: qteToAdd })
      } else if (leftOver[i].qte < ingred.qte) {
        i = shoppingList.findIndex(iList => iList.id === ingredRef.id)
        while (leftOver[i].qte + qteToAdd < ingred.qte) qteToAdd += ingredRef.buyQte
        shoppingList[i].qte = shoppingList[i].qte + qteToAdd
      }
    }
  })

  return {
    meals: [...state.meals, recipe.id],
    shoppingList
  }
}

const act = (
  state: StateData,
  recipe: Recipe
) => createState(addRecipe(state, recipe))

export default act