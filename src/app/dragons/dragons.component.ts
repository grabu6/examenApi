import { Component, OnInit } from '@angular/core';
import { DragonApi } from '../project/serveis/api/crides';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragons!: Array<any>;
  images!: Array<any>;

  constructor(private dragonApi:DragonApi ) { }

  ngOnInit(): void {
    this.getDragons();
  }
  getDragons() {
    this.dragonApi.getDragons().subscribe((data: any) => {
      this.dragons = data.results;
    })
  }
}


