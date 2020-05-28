import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // = [
  //   new Recipe('Ice Cream', 'IceCream with chocolate', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg'),
  //   new Recipe('Test', 'test test taste test', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg')
  // ];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }

}
