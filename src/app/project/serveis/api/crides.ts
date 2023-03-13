import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonApi {

  constructor(private http: HttpClient) { }
  requestOptions = this.createHeader();

  getDragons(){
    const url= 'https://www.dnd5eapi.co/api/monsters/';
    return this.http.get(url,this.requestOptions);
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