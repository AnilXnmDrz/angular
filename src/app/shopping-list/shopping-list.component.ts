import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[]=[
    // new Ingredients('apples',4),
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredients){
    console.log("in onIngredienntAdded",ingredient);
    
    this.ingredients.push(ingredient)
  }
  

}
