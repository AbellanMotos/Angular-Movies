import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

import { MoviesApiService } from './services/movies-api.service';

import {HttpClientModule} from '@angular/common/http';
import { ListMoviesComponent } from './list-movies/list-movies.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    ListMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
