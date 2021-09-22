import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = "http://localhost:8080/movies"
  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url);
  }

  createMovie(movie:Object):Observable<Object>{
    return this.http.post(this.url,movie);
  }

  getMovieById(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  updateMovie(id:number,movie:Object):Observable<Object>{
    return this.http.put(`${this.url}/${id}`,movie);
  }

  deleteMovie(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
