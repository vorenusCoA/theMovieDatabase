import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPeliculasComponent } from './mostrar-peliculas.component';

describe('MostrarPeliculasComponent', () => {
  let component: MostrarPeliculasComponent;
  let fixture: ComponentFixture<MostrarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
