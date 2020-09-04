import { ChooseRecipeAction } from './types'
import { State } from './state'
import { calcWasteScore } from './reward'


const transitionTokenizer = ({
  action,
  gameState,
  nextGameState,
}: {
  action: ChooseRecipeAction,
  gameState: State,
  nextGameState: State
}) => {
  return nextGameState.meals.length === 5 ? `mar ${nextGameState.toString()}  waste=${calcWasteScore(nextGameState)}` : '';
};

const getLastTransition = (e : any): any => { const iterations = Array.from(e); return iterations[iterations.length - 1] }

const episode = (e: any) => transitionTokenizer(getLastTransition(e));

const getWaste = (e: any) => calcWasteScore((getLastTransition(e) as any).nextGameState)

export {
  episode,
  getWaste
};
