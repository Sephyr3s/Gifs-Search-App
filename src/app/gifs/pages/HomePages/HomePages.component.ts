import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-Pages',
  templateUrl: './HomePages.component.html',
})
export class HomePagesComponent  {

  constructor( private gifsService: GifsService) { }

  get gifs(): Gifs[]{
    return this.gifsService.gifsList;
  }


}
