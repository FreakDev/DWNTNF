import { StateData } from './types';

export default ( expectedNbMeal: number ) => (state: StateData) => state.meals.length === expectedNbMeal
