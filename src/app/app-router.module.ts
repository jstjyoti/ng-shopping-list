import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from '../app/recipes/recipes.component';
import {ShoppingListComponent} from '../app/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoute: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: ':id', component: RecipeDetailComponent }
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
}) export class AppRouterModule {

}
