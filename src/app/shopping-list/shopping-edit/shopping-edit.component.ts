import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:true}) recipeName:ElementRef
  @ViewChild('amountInput', {static:true}) recipeAmount:ElementRef
  @Output() ingredientAdded: EventEmitter<Ingredients>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    
    const ingredientName=this.recipeName.nativeElement.value
    const ingredientAmount=this.recipeAmount.nativeElement.value
    const newIngredient= new Ingredients(ingredientName,ingredientAmount)
    this.ingredientAdded.emit(newIngredient)
    console.log("on adde tiem",newIngredient);
  }
}
