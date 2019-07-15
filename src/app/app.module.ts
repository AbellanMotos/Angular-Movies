import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesApiService } from './services/movies-api.service';
import { ListMoviesComponent } from './list-movies/list-movies.component'

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesCategoryComponent,
    ListMoviesComponent,
    MoviesSearchComponent,
    MovieDetailComponent,
    MoviesGenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  providers: [MoviesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
