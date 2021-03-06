import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovielistComponent } from './components/movielist/movielist.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovielistComponent,
    CreateMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
