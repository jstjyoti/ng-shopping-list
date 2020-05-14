import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ice Cream', 'IceCream with chocolate', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
