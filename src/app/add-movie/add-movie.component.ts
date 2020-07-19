import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { Genero } from '../model/genero';
import { PeliculaService } from '../service/pelicula.service';
import { GeneroService } from '../service/genero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  newMovie:Pelicula = new Pelicula
  genList:Genero[]=[]
  genero:Genero=new Genero
  id:string
  constructor(private service:PeliculaService,private router:Router,private serviceGeneros:GeneroService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceGeneros.getGeneros().subscribe((data:any)=>{this.genList=data})
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id){
      this.service.getPeliculasbyId(this.id).subscribe((data:Pelicula)=>{
        this.newMovie=data
      },()=>alert("Genero no encontrado"))
    }

  }
  addMovie(newMovie:Pelicula){
    if(this.id){
      this.service.updatePelicula(newMovie).subscribe(()=>{
        this.router.navigate(['/'])
      },()=>alert("Error al actualizar"))
    }else{
      this.service.insertPelicula(newMovie).subscribe(()=>{
        this.router.navigate(['/'])
      },()=>alert("No se pudo agregar la pelicula"))
    }




  }

}
