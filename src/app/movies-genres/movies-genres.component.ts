import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-genres',
  templateUrl: './movies-genres.component.html',
  styleUrls: ['./movies-genres.component.scss']
})
export class MoviesGenresComponent implements OnInit {
  data: object;
  id: any;
  genreMovies: object[] = [];
  page = 1;
  constructor(private api: MoviesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.api.getGenreMovie(params.id);
      this.api.getGenreMovie(this.id).then((data: any) => {
        this.genreMovies = data.results;
        this.page = 1;
        console.log(this.genreMovies);
      });
    });

  }

  nextPage() {
    this.api.getGenreMovie(this.id, ++this.page).then((data: any) => {
      this.genreMovies = [...this.genreMovies, ...data.results];
    });
  }
}
