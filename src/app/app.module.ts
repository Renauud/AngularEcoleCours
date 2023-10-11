import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './services/film/film.service';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './film-list/film-list.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path:'films',
    component:FilmListComponent
  },
  {
    path:'new',
    component: FilmNewComponent
  },
  {
    path:'modif/:id',
    component:FilmModifComponent
  },
  {
    path:'',
    component:HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmModifComponent,
    FilmNewComponent,
    HomeComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    FilmService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
