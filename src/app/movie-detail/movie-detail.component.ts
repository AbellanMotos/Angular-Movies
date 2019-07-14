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
  constructor(private api: MoviesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.params;
    this.id = this.id.value.id;
    
    this.api.getMovieDetail(this.id).then((data: any) => {
    this.data = data;
    });
  }

}
