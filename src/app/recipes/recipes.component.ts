import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[recipeService]
})
export class RecipesComponent implements OnInit {
  showRecipeDetail:Recipe
  constructor(private recipeService:recipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.showRecipeDetail=recipe
      }
    )
  
  }

}
