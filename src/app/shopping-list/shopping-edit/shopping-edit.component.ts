import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { shoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shopListForm: NgForm;
  ingredients: Ingredients[];

  constructor(private shoppingListService: shoppingListService) {}
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredients;
  editItemIndex: number;
  ngOnInit(): void {
    this.subscription = this.shoppingListService.editItem.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;

        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.shopListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    console.log('[shopping edit comp] new ingredient:', newIngredient);
    if (this.editMode) {
      this.shoppingListService.updateIngredientById(
        this.editItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shopListForm.reset();
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredientById(this.editItemIndex);
    this.onClear();
  }
  onClear() {
    this.shopListForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
