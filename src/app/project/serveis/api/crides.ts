import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servei {

  constructor(private http: HttpClient) { }
  requestOptions = this.createHeader();

  obtenirDades() {
    const requestOptions = this.createHeader();
    const url = 'https://api.artic.edu/api/v1/artworks';
    return this.http.get(url,requestOptions);
  }

  obtenirArtist() {
    const requestOptions = this.createHeader();
    const url = 'https://api.artic.edu/api/v1/artists';
    return this.http.get(url,requestOptions);
  }
  

  private createHeader(){

    const header = {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Acces-Control-Allow-Headers':'Origin, Content-Type, Accept,Authorization',
        'Authorization' : 'Bearer ' 
    }
    return {headers: new HttpHeaders(header)};
}

}