import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() filmName: string = "";
  @Input() filmOnAir:boolean = false;
  @Input() filmAffiche:string = "";
  @Input() index = 0;
  @Input() id = 0;
  // @Input() welcomeText:string = "Salut, voici ma nouvelle application"

  constructor(private Film : FilmService){}

  ngOnInit(){}

  onWatchFilm(){
    console.log(`Lecture du ${ this.filmName } démarré !`);
    
  }
  getOnAir(){
    return this.filmOnAir;
  }

  changeColor(){
    return this.filmOnAir ? "purple" : "red";
  }

  onSwitch(){
    this.Film.switchOnAir(this.index);
  }
}
