import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'models/pelicula';
import { PeliculaService } from 'servicio/pelicula.service';

@Component({
  selector: 'app-mostrar-peliculas',
  templateUrl: './mostrar-peliculas.component.html',
  styleUrls: ['./mostrar-peliculas.component.css']
})
export class MostrarPeliculasComponent implements OnInit {

  listaPeliculas: Pelicula[] = []
  base_url: string = ""
  page: number;
  vista_actual:string  
  deshabilitarScroll: boolean;

  constructor(private peliculaService: PeliculaService, private elementRef: ElementRef,
    private aRouter: ActivatedRoute) {   
    
    
    this.page = 1;
    this.vista_actual = aRouter.snapshot.url[0].path
    if(this.vista_actual === "most-watched-movies") {
      this.deshabilitarScroll = true
    } else {
      this.deshabilitarScroll = false
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'black';
  }

  ngOnInit(): void {   
    this.obtenerBaseUrl()
    if(this.vista_actual === "most-watched-movies" ) {
      this.getMostWatchedMovies()   
    } else if( this.vista_actual === "movies-in-theatres") {
      this.getMoviesInTheatres(true)
    } else if (this.vista_actual === "most-popular-movies") {
      this.getMostPopularMovies(true)
    }
  
     
  }

  getMostWatchedMovies() {
    this.peliculaService.getMostWatchedMovies().subscribe(data => {
      this.listaPeliculas = data
    }, error => {
      console.log(error)
    })
  }

  getMoviesInTheatres(resetList:boolean) {
    if(resetList) {
      this.page = 1;
      this.listaPeliculas = [];
    }
    this.peliculaService.getMoviesInTheatres(this.page).subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        
        this.listaPeliculas.push(data[i])
      }
    }, error =>{
      console.log(error)
    })
  }

  getMostPopularMovies(resetList:boolean) {
    if(resetList) {
      this.listaPeliculas = []
      this.page = 1;
    }
    this.peliculaService.getMostPopularMovies(this.page).subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        this.listaPeliculas.push(data[i])
      }
    }, error => {
      console.log(error)
    })
  }

  obtenerBaseUrl() {
    this.peliculaService.getBaseUrl().subscribe(data => {
      console.log(data)
      this.base_url = data.base_url

    }, error => {
      console.log(error)
    })
  }

  construirImagePath(poster_path: string) {
    return this.base_url + "w185" + poster_path
  }

  onScrollDown(ev: any) {

    console.log("scrolled down!!", ev);
    this.page++;
    if(this.vista_actual === "movies-in-theatres") {
      this.getMoviesInTheatres(false);
    } else if(this.vista_actual === "most-popular-movies") {
      this.getMostPopularMovies(false);
    }

  }

  compartirVista() { // le pasa al servicio la info
    this.peliculaService.cargarVista(this.vista_actual)
  }


}






