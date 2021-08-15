import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { shoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[]=[
    // new Ingredients('apples',4),
  ]
  constructor(private shoppingListService:shoppingListService) { }

  ngOnInit()  {
    this.ingredients=this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients=ingredients
      }
      )
  }
  
  
  
  
  

}
