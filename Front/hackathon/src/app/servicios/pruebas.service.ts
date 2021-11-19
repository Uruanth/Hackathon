import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) {
    console.log("servicio")

  }
probando(){
  console.log("asd");
}
  
}
