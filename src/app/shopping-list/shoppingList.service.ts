import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class shoppingListService {
  ingredientsChanged: EventEmitter<Ingredients[]> = new EventEmitter();
  private ingredients: Ingredients[] = [new Ingredients('apple', 2)];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  /**
   * function to add multiple ingredients
   * @param ingredients
   */
  addIngredients(ingredients: Ingredients[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // console.log('in addIngredients', ...ingredients);

    this.ingredients.push(...ingredients); //shorthand syntax for converting array to object
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
