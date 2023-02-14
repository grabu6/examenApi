import { Component, OnInit } from '@angular/core';
import { Servei } from '../project/serveis/api/crides';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})

export class PaginaComponent implements OnInit {
  quadres!:Array<any>;

  constructor(private servei: Servei ) { }

  ngOnInit(): void {
    this.servei.obtenirDades().subscribe((data:any)=>{
      this.quadres = data.data;
      console.log(this.quadres)
    })
  }
}
