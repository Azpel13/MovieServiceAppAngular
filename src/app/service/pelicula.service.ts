import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../model/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  url='https://peliculaswebapi.azurewebsites.net/api/Pelicula/'
  constructor(private httpclient:HttpClient) { }

  //GetPeliculas
  getPeliculas():Observable<any>{
    return this.httpclient.get(this.url+'GetPeliculas')
  }
  //GetPeliculaPorId
  getPeliculasbyId(idPelicula):Observable<Pelicula>{
    let params = new HttpParams().set('idPelicula',idPelicula)
    return this.httpclient.get<Pelicula>(this.url+'GetPeliculaPorId',{params:params})
  }
  //Post 
  insertPelicula(pelicula:Pelicula):Observable<any>{
    return this.httpclient.post(this.url+'InsertPelicula',pelicula)
  }

  updatePelicula(pelicula:Pelicula):Observable<any>{
    return this.httpclient.put(this.url+'UpdatePelicula',pelicula)
  }

  deletePelicula(idPelicula):Observable<any>{
    return  this.httpclient.delete(this.url+'DeletePelicula/'+idPelicula)
  }
}
