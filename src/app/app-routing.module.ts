import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';

const routes: Routes = [
  {path: 'movies/:category', component: MoviesCategoryComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'search', component: MoviesSearchComponent},
  {path: 'search/:query', component: MoviesSearchComponent},
  {path: 'movies/genres/:id', component: MoviesGenresComponent},
  {path: '**', redirectTo: 'movies/top_rated'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
