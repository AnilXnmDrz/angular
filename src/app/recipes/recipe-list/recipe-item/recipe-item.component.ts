import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe:Recipe
  @Output() selectedRecipe: EventEmitter<Recipe>=new EventEmitter()

  constructor(private recipeService:recipeService) { }

  ngOnInit(): void {
  }
  
}
