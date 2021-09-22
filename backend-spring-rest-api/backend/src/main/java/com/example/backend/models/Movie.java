package com.example.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Movie{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String movieName;
    private String director;
    private String description;
    public Movie(int id, String movieName, String director, String description) {
        this.id = id;
        this.movieName = movieName;
        this.director = director;
        this.description = description;
    }
    public int getId() {
        return id;
    }
    public Movie() {
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getMovieName() {
        return movieName;
    }
    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }
    public String getDirector() {
        return director;
    }
    public void setDirector(String director) {
        this.director = director;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}