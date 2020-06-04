import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id: number;

  // @Output() recipeClicked = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
  }

  onSelected(event: Recipe) {
    this.recipeService.recipeSelected.emit();
  }

}
