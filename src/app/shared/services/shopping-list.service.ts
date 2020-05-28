import { Injectable, EventEmitter } from '@angular/core';

import {Ingredient} from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Flour', 1),
    new Ingredient('choco', 5)

  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  constructor() { }
}
