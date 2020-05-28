import { Injectable, EventEmitter } from '@angular/core';

import {Recipe} from '../../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ice Cream', 'IceCream with chocolate', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg'),
    new Recipe('Test', 'test test taste test', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }


  constructor() { }
}
