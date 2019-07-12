import { Component, Input } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent {
  moviesFound: object[] = [];
  query: string = '';
  page = 1;
  
  constructor(private api: MoviesApiService, private router: Router) { }

  searchMovies() {
  this.api.searchMovies(this.query, this.page)
  .then((data: any) => {
  this.moviesFound = [...data.results];
  console.log(this.query);
  });
  
}
nextPage(){
  this.api.searchMovies(this.query, ++this.page)
  .then((data: any) => {
    this.moviesFound = [...this.moviesFound, ...data.results];
  }).catch(error => {
    if (this.query == ''){
      this.router.navigate(['search'])
    } else {
      alert('404 try it again')
    }
  })
  
 
 }
}
