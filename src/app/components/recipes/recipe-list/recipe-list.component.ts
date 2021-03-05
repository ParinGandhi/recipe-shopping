import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('A test recipe', 'This is simply a test', 'https://st2.depositphotos.com/1006009/5929/i/950/depositphotos_59290669-stock-photo-recipes-word-in-metal-type.jpg'),
    new Recipe('Another recipe', 'This is another test', 'https://st2.depositphotos.com/1006009/5929/i/950/depositphotos_59290669-stock-photo-recipes-word-in-metal-type.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
