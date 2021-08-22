import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';

export class shoppingListService {
  ingredientsChanged: Subject<Ingredients[]> = new Subject();
  private ingredients: Ingredients[] = [new Ingredients('apples', 2)];
  editItem: Subject<number> = new Subject();

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredientById(index: number, editedIngredient: Ingredients) {
    this.ingredients[index] = editedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredientById(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
