import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaElegidaComponent } from './pelicula-elegida.component';

describe('PeliculaElegidaComponent', () => {
  let component: PeliculaElegidaComponent;
  let fixture: ComponentFixture<PeliculaElegidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaElegidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaElegidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
