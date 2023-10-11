import { Component, Input } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {

  films:any = [];

  constructor(private Film:FilmService){}

  ngOnInit(){
    this.films = this.Film.films;
  }

  onAirAll(){
    this.Film.setOnAir();
  }

  noOnAirAll(){
    // this.Film.switchOnAir();
  }

}
