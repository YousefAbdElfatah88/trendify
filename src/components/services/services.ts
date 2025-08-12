import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../../app/services/movies';
import { Imovie } from '../../app/imovie';
import { Recommend } from "../recommend/recommend";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone:true,
  imports: [Recommend , CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
 movieList:Imovie[] = []
 private readonly movies = inject(Movies)


ngOnInit(): void {
  this.getMoviesData()
}

getMoviesData():void{
  this.movies.getALLMovies().subscribe({
    next:(res)=>{
     this.movieList = res.results
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
