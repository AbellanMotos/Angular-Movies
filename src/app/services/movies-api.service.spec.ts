import { TestBed } from '@angular/core/testing';

import { MoviesApiService } from './movies-api.service';

describe('MoviesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesApiService = TestBed.get(MoviesApiService);
    expect(service).toBeTruthy();
  });
});
