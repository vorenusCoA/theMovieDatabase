import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarPeliculasComponent } from './mostrar-peliculas/mostrar-peliculas.component';
import { PeliculaElegidaComponent } from './pelicula-elegida/pelicula-elegida.component';
import {HttpClientModule} from "@angular/common/http";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    MostrarPeliculasComponent,
    PeliculaElegidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
