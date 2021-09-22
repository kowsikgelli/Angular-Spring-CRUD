import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies: Movie[] = []
  constructor(private movieService:MovieService,private router: Router) { 
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data)=>{
      console.log("hello");
      console.log(data);
      
      this.movies = data
    })
    console.log(this.movies);
  }


  updateMovie(id:number){
    this.router.navigate(['upadteemployee',id])
  }
  deleteMovie(id:number){
    this.movieService.deleteMovie(id).subscribe(data=>{
      console.log(data);
    },error => console.log(error)
    )
  }

}
