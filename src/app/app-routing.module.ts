import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  {path: 'movies/:category', component: MoviesCategoryComponent},
  {path: 'search', component: MoviesSearchComponent},
  {path: 'search/:query', component: MoviesSearchComponent},
  {path: '**', redirectTo: 'movies/top_rated'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
