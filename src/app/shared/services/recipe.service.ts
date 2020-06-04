import { Injectable, EventEmitter } from '@angular/core';

import {Recipe} from '../../recipes/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ice Cream', 'IceCream with chocolate', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg', [
      new Ingredient('chocolateChips', 20),
      new Ingredient('Chocolate-sauce', 8),
      new Ingredient('milk', 2)
    ]),
    new Recipe('Test', 'test test taste test', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg', [
      new Ingredient('chocolateChips', 20),
      new Ingredient('Chocolate-sauce', 8),
      new Ingredient('milk', 2)
    ])
  ];

  constructor(private slService: ShoppingListService) { }



  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
