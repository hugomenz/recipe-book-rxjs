import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RecipesListComponent } from './recipes-list/recipes-list.component';

import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [AppComponent, RecipesListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DataViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
