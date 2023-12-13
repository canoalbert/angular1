import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MhwComponent } from './components/mhw/mhw.component';
import { ValorantComponent } from './components/valorant/valorant.component';
import { FinalsSpaceComponent } from './components/finals-space/finals-space.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {NgOptimizedImage} from "@angular/common";
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MhwComponent,
    ValorantComponent,
    FinalsSpaceComponent,
    PokemonComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
