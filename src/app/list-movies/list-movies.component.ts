import { Component, OnInit, Input } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() movie: object[]
  constructor(private api: MoviesApiService) { }

  ngOnInit() {
    /* this.api
    .getCategory(params.category)
    .then((data: any)) */
  } 

}
