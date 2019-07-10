import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';

const routes: Routes = [
  {path: 'movies/:category', component: MoviesCategoryComponent},
  {path: '**', redirectTo: 'movies/top_rated'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
