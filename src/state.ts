import { StateData, ShoppingListItem } from './types';

export class State {
  constructor(
    public meals: number[],
    public shoppingList: ShoppingListItem[]
  ) {}

  toString(): string {
    return [
      ...this.meals.map(m => m)
        .sort()
      ,
      ...this.shoppingList
        .sort((s1, s2) => (s1.id > s2.id ? 1 : -1))
        .map(i => `${i.id}=${i.qte}`)
    ].toString()
  }
}

const createState = (state: StateData) => new State(state.meals, state.shoppingList)

export default createState;
