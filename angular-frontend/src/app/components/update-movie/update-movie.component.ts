import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id:number = 0
  movieName:string=""
  director:string=""
  description:string=""  
  constructor(private movieService:MovieService,private routerInfo: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.routerInfo.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe((data)=>{
      this.id = data.id;
      this.movieName = data.movieName;
      this.director = data.director
      this.description = data.description
    },error=> console.log(error))
  }

  submitUpdateForm(){
    this.movieService.updateMovie(this.id,{
      id:this.id,
      movieName:this.movieName,
      director:this.director,
      description:this.description}).subscribe((data)=>{
        console.log(data)
      })
      this.router.navigate(["/"])
  }
}
