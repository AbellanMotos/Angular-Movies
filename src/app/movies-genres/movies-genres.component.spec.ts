import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGenresComponent } from './movies-genres.component';

describe('MoviesGenresComponent', () => {
  let component: MoviesGenresComponent;
  let fixture: ComponentFixture<MoviesGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
