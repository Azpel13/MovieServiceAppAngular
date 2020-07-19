import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url='https://peliculaswebapi.azurewebsites.net/api/Genero/'
  constructor(private httpClient:HttpClient) { }

  getGeneros():Observable<any>{
    return this.httpClient.get(this.url+'GetGeneros')
  }

}
