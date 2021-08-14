import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe
  @Output() selectedRecipe: EventEmitter<Recipe>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  itemSelected(){
    console.log("selected recipe");
    this.selectedRecipe.emit()
    
  }
}
