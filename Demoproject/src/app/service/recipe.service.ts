import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/domain/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private http: Http;
  constructor(http: Http) {
    this.http = http;
   }

  getRecipesList() {
    return this.http.get('http://localhost:8080/recipes')
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  getRecipe(recipeName: string) {
    return this.http.get('http://localhost:8080/recipes/' + recipeName)
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }

  saveRecipe(newAddRecipe: Recipe) {
    return this.http.post('http://localhost:8080/recipes', newAddRecipe)
    .pipe(map(
      (response: Response) => {
        return response.json();
      }
    ));
  }
}
