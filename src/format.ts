import { ChooseRecipeAction } from './types'
import { State } from './state'
import { calcWasteScore } from './reward'

import { recipes, ingredients } from './actions'

const transitionTokenizer = ({
  nextGameState,
}: {
  nextGameState: State
}) => {
  return [
    'Meals',
    '=====',
    ...nextGameState.meals.map(m => recipes.find(r => r.id === m )?.name ),
    '',
    'Shopping List',
    '=============',
    ...nextGameState.shoppingList.map(i => { const iref = ingredients.find(iref => iref.id === i.id); return `${iref?.name} : ${i.qte} ${iref?.unit}` } )
  ].join("\n")
};

const getLastTransition = (e : any): any => { const iterations = Array.from(e); return iterations[iterations.length - 1] }

const episode = (e: any) => transitionTokenizer(getLastTransition(e));

const getWaste = (e: any) => calcWasteScore((getLastTransition(e) as any).nextGameState)

export {
  episode,
  getWaste
};
