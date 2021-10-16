import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarPeliculasComponent } from './mostrar-peliculas/mostrar-peliculas.component';
import { PeliculaElegidaComponent } from './pelicula-elegida/pelicula-elegida.component';

const routes: Routes = [
              {path:"most-watched-movies", component:MostrarPeliculasComponent},
              {path:"movies-in-theatres", component:MostrarPeliculasComponent},
              {path:"most-popular-movies", component:MostrarPeliculasComponent},
              {path:"pelicula-elegida/:id", component:PeliculaElegidaComponent},
              {path:"**", redirectTo:"most-watched-movies", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
