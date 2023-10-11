import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  
  films = [
    {
      id:1,
      title:"Jurassic Park",
      onAir:false,
      filmAffiche:'https://upload.wikimedia.org/wikipedia/fr/4/46/Jurassic_Park_Logo.png',
    },{
      id:2,
      title: 'Star Wars',
      onAir: false,
      filmAffiche: 'https://lumiere-a.akamaihd.net/v1/images/image_83011738.jpeg?region=0,0,540,810'
    }, {
      id:3,
      title: 'Dune',
      onAir: true,
      filmAffiche: 'https://musicart.xboxlive.com/7/ca125200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
    }
  ]

  setOnAir(){
    for(const film of this.films){
      film.onAir = true;
    }
  }

  setNoOnAir(){
    for(const film of this.films){
      film.onAir = false;
      console.log(film);
    }
  }

  switchOnAir(index:number){
    this.films[index].onAir = !this.films[index]!.onAir;
  }
}
