import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './view/nav/nav.component';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { MainComponent } from './view/main/main.component';
import { RecipeService } from 'src/app/service/recipe.service';
import {GrowlModule} from 'primeng/growl';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      SidebarComponent,
      MainComponent
   ],
   imports: [
      BrowserModule,
      DropdownModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      GrowlModule
   ],
   providers: [RecipeService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
