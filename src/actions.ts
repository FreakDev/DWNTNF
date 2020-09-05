import { IngredientRef, Recipe, ChooseRecipeAction, StateData } from './types'

export const recipes: Recipe[] = [
  { id: 1, name: 'Steak grillé glacé', ingredients: [ { id: 49, qte: 170}, { id: 19, qte: 50}, { id: 31, qte: 0.5}, { id: 26, qte: 12}, { id: 50, qte: 25}, { id: 30, qte: 150},] }, 
  { id: 2, name: 'Boulette de porc (Hoisin)', ingredients: [ { id: 18, qte: 125}, { id: 9, qte: 1}, { id: 4, qte: 60}, { id: 10, qte: 110}, { id: 3, qte: 15}, { id: 11, qte: 74}, { id: 48, qte: 80},] }, 
  { id: 3, name: 'Salade halloumi pastèque', ingredients: [ { id: 46, qte: 100}, { id: 47, qte: 60}, { id: 30, qte: 50}, { id: 4, qte: 50}, { id: 31, qte: 1},] }, 
  { id: 4, name: 'Salade Poulet aux herbe', ingredients: [ { id: 6, qte: 1}, { id: 42, qte: 15}, { id: 43, qte: 0.5}, { id: 30, qte: 60}, { id: 25, qte: 12.5}, { id: 44, qte: 25}, { id: 45, qte: 1}, ] }, 
  { id: 5, name: 'Bols de boeuf haché (coréene)', ingredients: [ { id: 39, qte: 170}, { id: 8, qte: 8}, { id: 40, qte: 30}, { id: 9, qte: 0.5}, { id: 37, qte: 100}, { id: 10, qte: 200}, { id: 41, qte: 30}, ] }, 
  { id: 6, name: 'Ravioli au citron', ingredients: [ { id: 19, qte: 50}, { id: 37, qte: 50}, { id: 30, qte: 90}, { id: 13, qte: 0.5}, { id: 8, qte: 4}, { id: 24, qte: 0.5}, { id: 16, qte: 125}, ] }, 
  { id: 7, name: 'Taco de chou fleur', ingredients: [ { id: 32, qte: 70}, { id: 31, qte: 0.5}, { id: 8, qte: 4}, { id: 33, qte: 0.5}, { id: 9, qte: 0.5}, { id: 30, qte: 90}, { id: 34, qte: 750}, { id: 11, qte: 80}, { id: 35, qte: 80}, { id: 36, qte: 25},] }, 
  { id: 8, name: 'Crevettes poêlées', ingredients: [ { id: 29, qte: 140}, { id: 30, qte: 45}, { id: 8, qte: 8}, { id: 31, qte: 1}, { id: 22, qte: 1}, { id: 30, qte: 90}, ] }, 
  { id: 9, name: 'Souvlakis de butternut', ingredients: [ { id: 20, qte: 110}, { id: 21, qte: 1}, { id: 8, qte: 4}, { id: 22, qte: 1}, { id: 23, qte: 1}, { id: 24, qte: 0.5}, { id: 25, qte: 12.5}, { id: 28, qte: 50}, { id: 27, qte: 15}, ] }, 
  { id: 10, name: 'Boulette de porc oignon et vert', ingredients: [ { id: 18, qte: 140}, { id: 19, qte: 50}, { id: 12, qte: 50}, { id: 9, qte: 1}, { id: 8, qte: 8}, { id: 33, qte: 0.5}, { id: 11, qte: 80}, { id: 30, qte: 90},] }, 
  { id: 11, name: 'Bols champignon poêlé', ingredients: [ { id: 19, qte: 50}, { id: 8, qte: 4}, { id: 13, qte: 0.5}, { id: 14, qte: 100}, { id: 15, qte: 85}, { id: 11, qte: 80}, { id: 17, qte: 12}] }, 
  { id: 12, name: 'Poulet aux oignon vert', ingredients: [ { id: 6, qte: 140}, { id: 7, qte: 70}, { id: 8, qte: 4}, { id: 9, qte: 1.5}, { id: 10, qte: 100}, { id: 11, qte: 80},] }, 
  { id: 13, name: 'Morue glacée', ingredients: [ { id: 1, qte: 1}, { id: 2, qte: 85}, { id: 3, qte: 10}, { id: 4, qte: 50}, { id: 5, qte: 90}, ] },  

  // { id: 14, name: 'n', ingredients: [ { id: 1, qte: 1}, { id: 6, qte: 3}, { id: 8, qte: 3}, ] }, 
  // { id: 15, name: 'o', ingredients: [ { id: 2, qte: 1}, { id: 6, qte: 4}, { id: 9, qte: 4}, ] }, 
  // { id: 16, name: 'p', ingredients: [ { id: 3, qte: 1}, { id: 4, qte: 5}, { id: 7, qte: 2}, ] }, 
  // { id: 17, name: 'q', ingredients: [ { id: 3, qte: 1}, { id: 4, qte: 2}, { id: 8, qte: 1}, ] }, 
  // { id: 18, name: 'r', ingredients: [ { id: 2, qte: 1}, { id: 4, qte: 3}, { id: 7, qte: 3}, ] }, 
  // { id: 19, name: 's', ingredients: [ { id: 2, qte: 1}, { id: 5, qte: 5}, { id: 8, qte: 4}, ] }, 
  // { id: 20, name: 't', ingredients: [ { id: 3, qte: 1}, { id: 5, qte: 6}, { id: 9, qte: 1}, ] }, 
  // { id: 21, name: 'u', ingredients: [ { id: 2, qte: 1}, { id: 6, qte: 3}, { id: 7, qte: 1}, ] }, 
  // { id: 22, name: 'v', ingredients: [ { id: 1, qte: 1}, { id: 6, qte: 2}, { id: 9, qte: 4}, ] }, 
]

export const ingredients: IngredientRef[] = [
  { id: 1, name: 'Morue', buyQte: 1, unit: 'filet' },
  { id: 2, name: 'Bébé bock choys (1 chou = env. 120g)', buyQte: 120, unit: 'g' },
  { id: 3, name: 'Gingembre (racine de 5cm = env. 30g)', buyQte: 30, unit: 'g' },
  { id: 4, name: 'Pois mange tout', buyQte: 100, unit: 'g' },
  { id: 5, name: 'Nouilles soba', buyQte: 100, unit: 'g' },
  { id: 6, name: 'Poulet (1 escalope = env. 125g)', buyQte: 125, unit: 'g' },
  { id: 7, name: 'Poivrons (1 légume = env. 180g)', buyQte: 180, unit: 'g' },
  { id: 8, name: 'Ail (1 tête = env. 80g)', buyQte: 80, unit: 'g' },
  { id: 9, name: 'Oignon vert (1 botte = env. 8 tiges)', buyQte: 8, unit: 'tige(s)' },
  { id: 10, name: 'Bock choys (1 légume = env. 190g)', buyQte: 190, unit: 'g' },
  { id: 11, name: 'Riz', buyQte: 1000, unit: 'g' },
  { id: 12, name: 'Chou vert (1 légume = env. 800g)', buyQte: 800, unit: 'g' },
  { id: 13, name: 'Persil (botte)', buyQte: 1, unit: 'botte(s)' },
  { id: 14, name: 'Brocoli (1 couronne = env. 250g)', buyQte: 250, unit: 'g' },
  { id: 15, name: 'Champignon Portobello (1 légume = env. 85g)', buyQte: 85, unit: 'g' },
  { id: 16, name: 'Ravioli (frais)', buyQte: 300, unit: 'g' },
  { id: 17, name: 'Noix de cajou', buyQte: 300, unit: 'g' },
  { id: 18, name: 'Porc (haché)', buyQte: 450, unit: 'g' },
  { id: 19, name: 'Chou rouge (1 légume = env. 800g)', buyQte: 800, unit: 'g' },
  { id: 20, name: 'Butternut (1 légume = env. 1.5Kg)', buyQte: 1500, unit: 'g' },
  { id: 21, name: 'Aneth (bouquet)', buyQte: 1, unit: 'bouquet(s)' },
  { id: 22, name: 'Concombre', buyQte: 1, unit: 'unité(s)' },
  { id: 23, name: 'Tomate', buyQte: 1, unit: 'unité(s)' },
  { id: 24, name: 'Citron (jaune)', buyQte: 1, unit: 'unité(s)' },
  { id: 25, name: 'Echalotte (1 bulbe = env. 25g)', buyQte: 25, unit: 'g' },
  { id: 26, name: 'Oignon (1 bulbe = env. 250g)', buyQte: 250, unit: 'g' },
  { id: 27, name: 'Feta (1 pot = en moy. 200g)', buyQte: 200, unit: 'g' },
  { id: 28, name: 'Yogourt grec (1 pot = en moy. 500g)', buyQte: 500, unit: 'g' },
  { id: 29, name: 'Crevette', buyQte: 100, unit: 'g' },
  { id: 30, name: 'Laitue (tête = env. 300g)', buyQte: 300, unit: 'g' },
  { id: 31, name: 'Coriandre fraiche', buyQte: 1, unit: 'botte(s)' },
  { id: 32, name: 'Tomate cerise (1 barquette = en moy. 250g)', buyQte: 250, unit: 'g' },
  { id: 33, name: 'Lime (citron vert)', buyQte: 1, unit: 'unité(s)' },
  { id: 34, name: 'Chou fleur (1 légume = env. 1.5Kg)', buyQte: 1500, unit: 'g' },
  { id: 35, name: 'Farine', buyQte: 1000, unit: 'g' },
  { id: 36, name: 'Avocat (1 pièce = env. 300g)', buyQte: 300, unit: 'g' },
  { id: 37, name: 'Carottes', buyQte: 1000, unit: 'g' },
  { id: 38, name: 'Parmesan (1 pointe = en moy. 200g)', buyQte: 200, unit: 'g' },
  { id: 39, name: 'Boeuf (haché)', buyQte: 450, unit: 'g' },
  { id: 40, name: 'Radis (1 botte = env. 300g)', buyQte: 300, unit: 'g' },
  { id: 41, name: 'Jus de pomme', buyQte: 1000, unit: 'mL' },
  { id: 42, name: 'Confiture (1 pot = env. 370g)', buyQte: 370, unit: 'g' },
  { id: 43, name: 'Orange', buyQte: 1, unit: 'unité(s)' },
  { id: 44, name: 'Petit pois (écossés)', buyQte: 200, unit: 'g' },
  { id: 45, name: 'Thym (botte)', buyQte: 1, unit: 'botte' },
  { id: 46, name: 'Halloumi', buyQte: 200, unit: 'g' },
  { id: 47, name: 'Pasteque (1 pièce = env. 3.5Kg)', buyQte: 3500, unit: 'g' },
  { id: 48, name: 'Lait de coco (1 petite brique = en moy. 250mL)', buyQte: 250, unit: 'mL' },
  { id: 49, name: 'Boeuf (1 steak = en moy. 170g)', buyQte: 170, unit: 'g' },
  { id: 50, name: 'Bettrave crue (1 boule = env. 300g)', buyQte: 300, unit: 'g' },
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
