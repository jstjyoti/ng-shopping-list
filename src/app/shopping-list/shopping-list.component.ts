import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe(( ingredients ) => this.ingredients = ingredients);
  }

  onIngredientAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);

    this.shoppingListService.addIngredient(ingredient);

  }

}
