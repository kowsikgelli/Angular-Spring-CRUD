import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movieName:string=""
  director:string=""
  description:string=""
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
  }
  submitForm(){
    this.movieService.createMovie({movieName:this.movieName,director:this.director,description:this.description}).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/'])
    })  
  }

}
