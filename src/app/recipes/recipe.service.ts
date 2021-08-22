import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { shoppingListService } from '../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';

@Injectable()
export class recipeService {
  recipeChanged: Subject<Recipe[]> = new Subject();
  recipes: Recipe[] = [
    new Recipe(
      'test',
      'this is test desc',
      'https://anytvnews.com/wp-content/uploads/2021/04/1618711184_Garlic-Cheese-Toste-Recie-If-you-are-at-home-on.jpg',
      [new Ingredients('meat', 1), new Ingredients('chilli', 3)]
    ),
    new Recipe(
      'test2',
      'this is test desc2',
      'https://downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [new Ingredients('meat', 1), new Ingredients('chilli', 3)]
    ),
  ];
  // https://st3.depositphotos.com/1491432/16181/i/1600/depositphotos_161818062-stock-photo-traditional-dumpling-momos-and-tomato.jpg
  constructor(private shoppingListService: shoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipeById(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
