import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  baseUrlApi = 'https://api.themoviedb.org/3'
  apikey = '6ab147ef955121e2515503505f30f213'
  spanish = '&language=es-ES'

  constructor(private http: HttpClient) {

  }
  getCategory(cat) {

const validCategories = ['top_rated', 'upcoming', 'popular'];

if (validCategories.includes(cat)){
  return this.http
  .get(`${this.baseUrlApi}/movie/${cat}?api_key=${this.apikey}${this.spanish}`)
  .toPromise()

} else { 
  return Promise.reject('No valid category')
}

    
  }
}
