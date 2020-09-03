import markov from 'markovts';
import * as memory from 'markovts/memory';
import { egreedy, greedy } from 'markovts/policies';
import createState from './state'

import * as format from './format'

import actions, { recipes } from './actions';
import reward, { calcWasteScore } from './reward';
import final from './final';
import act, { addRecipe } from './act';
import { StateData } from './types';
import * as fs from 'fs';

const game = {actions, reward, final: final(5), act}
const initialState = createState({
  meals:[],
  shoppingList:[]
})

function fullRandom() {
  let state: StateData = {
    meals: [],
    shoppingList: []
  }

  while(state.meals.length != 5) {
    const rec = recipes[Math.floor(Math.random() * recipes.length)]
    if (!state.meals.includes(rec.id))
      state = addRecipe(state, rec)
  }

  console.log('rnd', [...state.meals, ...state.shoppingList.map(i => `${i.id}=${i.qte}`)].toString(), `waste=${calcWasteScore(state)}`, "\n")
}

const α = 0.9; // learning rate
const γ = 0.9; // discount factor
const ε = 0.2; // exploration rate
const policies = {move: egreedy(ε), learn: greedy, show: egreedy(0.5)}

if (process.argv[2] === 't' && process.argv[3]) {
  const m = markov({
    game: {game, initialState},
    memory: {memory, memoryState: memory.init(0.0)},
    policies
  })
  .train(1000, α, γ)
  
  fs.writeFileSync(process.argv[3], JSON.stringify(m.memoryState))
  console.log('done')
} else {
  const memoryState = JSON.parse(fs.readFileSync(process.argv[2]).toString())

  const m = markov({
    game: {game, initialState},
    memory: {memory, memoryState},
    policies
  })

  for(let i=0; i<5; i++) {
    m.play( (e: any) => console.log(format.episode(e)) );
    fullRandom();
  }  
}


