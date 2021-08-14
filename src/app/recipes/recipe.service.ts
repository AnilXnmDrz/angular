import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class recipeService{
    recipeSelected:EventEmitter<Recipe>=new EventEmitter()
    recipes: Recipe[] = [
        new Recipe(
          'test',
          'this is test desc',
          'https://anytvnews.com/wp-content/uploads/2021/04/1618711184_Garlic-Cheese-Toste-Recie-If-you-are-at-home-on.jpg'
        ),
        new Recipe(
          'test2',
          'this is test desc2',
          'https://downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
        ),
      ];

    getRecipe(){
        return this.recipes.slice()
    }
        
}