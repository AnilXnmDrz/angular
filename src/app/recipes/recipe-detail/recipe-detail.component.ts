import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToShow:Recipe
  constructor() { 
    console.log("in detail",this.recipeToShow);

  }

  ngOnInit(): void {
    console.log("in detail",this.recipeToShow);
    
  }

}
