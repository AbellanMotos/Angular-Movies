import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  data: object;
  id: any;
  similarMovies: object[] = [];
  page = 1;
  constructor(private api: MoviesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.id = params.id;
      this.api.getMovieDetail(params.id);
      this.api.getMovieDetail(this.id).then((data: any) => {
        this.data = data;
        console.log(this.data);

        this.api.getSimilarMovies(this.id, this.page).then((data: any) => {
          this.similarMovies = data.results;
          this.page = 1;
        });
      });
    });
  }


  nextPage() {
    this.api.getSimilarMovies(this.id, ++this.page).then((data: any) => {
      this.similarMovies = [...this.similarMovies, ...data.results];
    });
  }
}
