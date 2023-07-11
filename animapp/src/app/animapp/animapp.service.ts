import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimApp, Datos } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  constructor(private http:HttpClient) { }

  apiKey = 'hjKfwHjV6quyCF8XUbQfqDJdZtWoJITy'
  resultados : Datos []=[];
  
  buscarGifs(query : string) {
    this.http.get<AnimApp>(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe(resp => {
      this.resultados = resp.data;
    })
  }
  
}
