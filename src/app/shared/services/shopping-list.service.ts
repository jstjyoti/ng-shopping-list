import { Injectable, EventEmitter } from '@angular/core';

import {Ingredient} from '../ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Flour', 1),
    new Ingredient('choco', 5)

  ];

  ingredientChanged = new Subject<Ingredient[]>();

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  constructor() { }
}
