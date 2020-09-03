import { calcLeftOver } from './act'
import { ShoppingListItem, StateData } from './types'

export const calcWasteScore = (state: StateData) => calcLeftOver(state).reduce( (a: number, c: ShoppingListItem) => a + c.qte, 0 )

export default (state: StateData, prevState: StateData) => {
  return -(state.meals.length ? calcWasteScore(state) : 0)
}
