import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) {
    console.log("servicio")

  }

  getNew() {

    this.http.get("https://www.google.com/maps/search/?api=1&query=Bogota+centro");
      

  }
}
