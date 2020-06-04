import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from '../app/recipes/recipes.component';
import {ShoppingListComponent} from '../app/shopping-list/shopping-list.component';

const appRoute: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
}) export class AppRouterModule {

}
