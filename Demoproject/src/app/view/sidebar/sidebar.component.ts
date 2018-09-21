import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/domain/recipe';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private recipeObject = new Recipe();
  private recipeName;
  private recipeService: RecipeService;
  private recipeList: Recipe[];
  private recipePopulateList = [];
  private addRecipeflag = false;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
   }

  ngOnInit() {
    this.recipeService.getRecipesList().subscribe(
      (data) => {
        console.log(data);
        this.recipeList = data;
        console.log('------------------');
        console.log(this.recipeList);
        this.recipePopulateList.push({label: 'Select Recipe', value: ''});
        for ( let i = 0; i < this.recipeList.length; i++ ) {
          this.recipePopulateList.push({label: this.recipeList[i].recipeName,
              value: this.recipeList[i].id});
        }
      }
    );
  }

  getRecipe() {
    if ( this.recipeList !== undefined) {
      for ( let i = 0; i < this.recipeList.length; i++ ) {
        if (this.recipeName === this.recipeList[i].recipeName) {
          this.recipeObject.recipeName = this.recipeList[i].recipeName;
          this.recipeObject.ingredient1 = this.recipeList[i].ingredient1;
          this.recipeObject.ingredient2 = this.recipeList[i].ingredient2;
          this.recipeObject.ingredient3 = this.recipeList[i].ingredient3;
          this.recipeObject.ingredient4 = this.recipeList[i].ingredient4;
        }
      }
      return this.recipeObject;
    }
  }

  addRecipe() {
    // alert('hi');
    this.addRecipeflag = true;
  }

  updateList(saveObject) {
    this.recipePopulateList.push({label: saveObject.recipeName, value: saveObject.id});
    this.recipeList.push(saveObject);
  }

  updateRecipeFlag(returnRecipeFlag) {
    this.addRecipeflag = returnRecipeFlag;
  }
}
