import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { shoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class recipeService{
    recipeSelected:EventEmitter<Recipe>=new EventEmitter()
    recipes: Recipe[] = [
        new Recipe(
          'test',
          'this is test desc',
          'https://anytvnews.com/wp-content/uploads/2021/04/1618711184_Garlic-Cheese-Toste-Recie-If-you-are-at-home-on.jpg',
          [
            new Ingredients('meat',1),
            new Ingredients('chilli',3),

          ]
        ),
        new Recipe(
          'test2',
          'this is test desc2',
          'https://downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
          [
            new Ingredients('meat',1),
            new Ingredients('chilli',3),

          ]
        ),
      ];

        constructor(private shoppingListService:shoppingListService){

        }
    getRecipe(){
        return this.recipes.slice()
    }
    addIngredientsToShoppingList(ingredients:Ingredients[]){
      this.shoppingListService.addIngredients(ingredients)
    }
        
}