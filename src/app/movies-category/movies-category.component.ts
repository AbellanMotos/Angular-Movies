import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';



@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {
  category: string;
  movies: object[] = [];
  page = 1;

  constructor(private route: ActivatedRoute, private api: MoviesApiService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');
      this.page = 1;

      this.api
      .getCategory(params.category)
      .then((data: any) => {
          console.log(data)
          this.movies = data.results
        }
      ).catch(error => {
        if (error === 'No valid category'){
          //redirect
          this.router.navigate(['movies/top_rated'])
        } else {
          alert('404 try again')
        }})
    });
  }

  nextPage(){
    let cat = this.category.replace(' ', '_');

    this.api
      .getCategory(cat, ++this.page)
      .then((data: any) => {
          console.log(data)
          this.movies = [...this.movies, ...data.results];
        }
      ).catch(error => {
        if (error === 'No valid category'){
          //redirect
          this.router.navigate(['movies/top_rated'])
        } else {
          alert('404 try again')
        }})
  }
}
