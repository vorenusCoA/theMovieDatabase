import { HttpClient } from '@angular/common/http';
import {  Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  url = "http://localhost:3000/api/peliculas/" 

  private vista_actual = new BehaviorSubject("");
  sharedView = this.vista_actual.asObservable();

  constructor(private http: HttpClient) { }  

  getMostWatchedMovies():Observable<any> {
    return this.http.get(this.url + "peliculas-de-la-semana")
  }

  getMoviesInTheatres(page:number):Observable<any> {
    return this.http.get(this.url + "peliculas-en-cine/" + page)
  }

  getMostPopularMovies(page:number):Observable<any> {
    return this.http.get(this.url + "peliculas-populares/" + page)
  }

  getMovieDetails(id:number):Observable<any> {
    return this.http.get(this.url + "movie/" + id )
  }

  getBaseUrl():Observable<any> {
    return this.http.get(this.url + "base_url")
  }


  cargarVista(vista: string) {
    this.vista_actual.next(vista)
  }


}
