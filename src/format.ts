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

const episode = (e: any) => { const iterations = Array.from(e); return transitionTokenizer(iterations[iterations.length - 1] as any) };

export {
  episode,
};
