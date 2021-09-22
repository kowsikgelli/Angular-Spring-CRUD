import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

const routes: Routes = [
  {path:"",component:MovielistComponent},
  {path:"createmovie",component:CreateMovieComponent},
  {path:'upadteemployee/:id',component:UpdateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
