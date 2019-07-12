import { Component, Input } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent {
  moviesFound: object[] = [];
  query: string = '';
  
  constructor(private api: MoviesApiService) { }

  searchMovies() {
  this.api.searchMovies(this.query).subscribe((data: any) => {
  this.moviesFound = data.results
  console.log(data);
  });

 }

}
