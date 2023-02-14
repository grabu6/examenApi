import { Component, OnInit } from '@angular/core';
import { Servei } from '../project/serveis/api/crides';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})

export class PaginaComponent implements OnInit {
  quadres!:Array<any>;
  paginacio!:any;
  artistes!:Array<any>;
  constructor(private servei: Servei ) { }

  ngOnInit(): void {
    this.servei.obtenirDades().subscribe((data:any)=>{
      this.quadres = data.data;
      console.log(this.quadres)
    })

    this.servei.obtenirDades().subscribe((data:any)=>{
      this.paginacio = data.pagination;
      console.log(this.paginacio)
    })
    this.servei.obtenirArtist().subscribe((data:any)=>{
      this.artistes = data.data;
      console.log(this.artistes)
    }
  )}
}
