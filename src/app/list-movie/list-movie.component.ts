import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../service/pelicula.service'
import { Pelicula } from '../model/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies:Pelicula[]=[]
  movie:Pelicula=new Pelicula
  movieData:Pelicula=new Pelicula
  value=false
  id:string
  constructor(private service:PeliculaService,private router:Router) { }

  ngOnInit(): void {
    this.cargarPeliculas()
  }
  search(id) {
    this.value = true
    this.service.getPeliculasbyId(id).subscribe((data: Pelicula) => { this.movieData = data })
  }

  cargarPeliculas(){
    this.service.getPeliculas().subscribe((data:any)=>{this.movies=data})
  }
  deleteMovie(movie:Pelicula,index: number){
    this.movies.splice(index, 1)
    this.service.deletePelicula(movie).subscribe(()=>{
      alert("Se ha eliminado correctamente")
    },()=>{
      alert("No se pudo eliminar")
    })
  }

}
