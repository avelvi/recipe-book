import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  recipe: Recipe =  new Recipe("Dummy", "Dummy", "http://pre02.deviantart.net/4db9/th/pre/i/2009/260/f/a/blender__texture_dummy_by_3d_asuarus.jpg");

  @Output() recipeSelected = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
