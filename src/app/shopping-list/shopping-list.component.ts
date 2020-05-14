import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedModels/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 1),
    new Ingredient('choco', 5)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
