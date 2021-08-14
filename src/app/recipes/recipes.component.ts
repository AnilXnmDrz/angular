import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  showRecipeDetail:Recipe
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    console.log("in reipe component",recipe);
    this.showRecipeDetail=recipe
  }
}
