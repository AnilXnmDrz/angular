import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() wasSelectedRecipe:EventEmitter<Recipe>=new EventEmitter()
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

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelect(recipe:Recipe){
    console.log("in recipe list",recipe);
    this.wasSelectedRecipe.emit(recipe)
    
  }
}
