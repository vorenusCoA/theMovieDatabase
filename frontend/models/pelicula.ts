export class Pelicula {
    id: number;
    overview: string;
    release_date: string;
    original_title: string;
    poster_path: string;

    constructor(id:number, overview:string, release_date:string, original_title:string, poster_path:string) {
        this.id = id,
        this.overview = overview,
        this.release_date = release_date,
        this.original_title = original_title,
        this.poster_path = poster_path

    }



}