import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'models/pelicula';
import { PeliculaService } from 'servicio/pelicula.service';


@Component({
  selector: 'app-pelicula-elegida',
  templateUrl: './pelicula-elegida.component.html',
  styleUrls: ['./pelicula-elegida.component.css']
})
export class PeliculaElegidaComponent implements OnInit {
 
  id:number | null;;
  listaPeliculas: Pelicula[] | null
  peliculaElegida: Pelicula | null
  rutaARegresar:string
 


  constructor(private route: Router, private aRouter: ActivatedRoute,
    private peliculaService: PeliculaService, private elementRef: ElementRef) {
      
    this.id = Number(this.aRouter.snapshot.paramMap.get("id"))
    this.listaPeliculas = null
    this.peliculaElegida = null
    this.rutaARegresar = ""
  
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    if(this.id !== null) {
      this.peliculaService.sharedView.subscribe(vista_actual => this.rutaARegresar = vista_actual)
      console.log("recibiendo", this.rutaARegresar)
      this.peliculaService.getMovieDetails(this.id).subscribe(pelicula =>{
        this.peliculaElegida = pelicula        
      }, error => {
        console.log(error)
      })

    } 

  }

  construirImagePath(poster_path: string) {
    return "http://image.tmdb.org/t/p/" + "w500" + poster_path
  }  



}









