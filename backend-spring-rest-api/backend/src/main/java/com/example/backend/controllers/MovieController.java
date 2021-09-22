package com.example.backend.controllers;

import com.example.backend.repositories.MovieRepository;
import com.example.backend.models.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
    
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/movies")
    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    @PostMapping("/movies")
    public Movie createMovie(@RequestBody Movie movie){
        return movieRepository.save(movie);
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable int id){
        Movie movie = null;
        Optional<Movie> m = movieRepository.findById(id);
        if(m.isPresent()){
            movie = m.get();
        }
        return ResponseEntity.ok(movie);
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable int id,@RequestBody Movie movie){
        Movie movie1 = null;
        Optional<Movie> m = movieRepository.findById(id);
        if(m.isPresent()){
            movie1 = m.get();
        }
        movie1.setMovieName(movie.getMovieName());
        movie1.setDirector(movie.getDirector());
        movie1.setDescription(movie.getDescription());

        Movie updatedMovie = movieRepository.save(movie1);

        return ResponseEntity.ok(updatedMovie);
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable int id){
        Movie movie1 = null;
        Optional<Movie> m = movieRepository.findById(id);
        if(m.isPresent()){
            movie1 = m.get();
        }
        movieRepository.delete(movie1);
        return ResponseEntity.ok("Deleted Sucessfully");
    }
}
