import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { shoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredients[] = [
    // new Ingredients('apples',4),
  ];
  constructor(private shoppingListService: shoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number) {
    console.log('[shoppingList comp] item index:', index);

    this.shoppingListService.editItem.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
