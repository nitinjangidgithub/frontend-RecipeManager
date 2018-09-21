import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/domain/recipe';
import {Message} from 'primeng/primeng';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() recipeObject: Recipe;
  @Input() addRecipeflag;

  @Output() saveObject: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() returnRecipeFlag: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  msgs: Message[] = [];

  private recipeService: RecipeService;
  private recipeList: Recipe[];
  private recipePopulateList = [];
  private newAddRecipe = new Recipe();

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
   }

  ngOnInit() {
    //  alert(this.recipeObject.recipeName);


  }

  showHideHeader() {
    if (this.recipeObject !== undefined) {
      if (this.recipeObject.recipeName === undefined || this.recipeObject.recipeName === null || this.recipeObject.recipeName === '') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  showHideRecipe() {
    if (this.recipeObject !== undefined) {
      if (this.recipeObject.recipeName !== undefined && this.recipeObject.recipeName !== null && this.recipeObject.recipeName !== '') {
          return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  saveRecipe() {
    console.log(this.newAddRecipe);
    if ( (this.newAddRecipe.ingredient1 === undefined || this.newAddRecipe.ingredient1 === null || this.newAddRecipe.ingredient1 === '')
    && (this.newAddRecipe.ingredient2 === undefined || this.newAddRecipe.ingredient2 === null || this.newAddRecipe.ingredient2 === '')
    && (this.newAddRecipe.ingredient3 === undefined || this.newAddRecipe.ingredient3 === null || this.newAddRecipe.ingredient3 === '')
    && (this.newAddRecipe.ingredient4 === undefined || this.newAddRecipe.ingredient4 === null || this.newAddRecipe.ingredient4 === '') ) {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Please filled atleast one Ingredient '});
        alert('Please filled atleast one Ingredient!');
    } else {
      this.recipeService.saveRecipe(this.newAddRecipe).subscribe(
        (data) => {
          console.log('save data' + data);
          this.saveObject.emit(this.newAddRecipe);
          this.returnRecipeFlag.emit(false);
          this.addRecipeflag = false;
        }
      );
    }

  }

  cancel() {
    this.returnRecipeFlag.emit(false);
    this.addRecipeflag = false;
  }

  addRecipeflagMethod() {
    return this.addRecipeflag;
  }

}
