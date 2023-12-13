import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MhwComponent} from "./components/mhw/mhw.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {ValorantComponent} from "./components/valorant/valorant.component";
import {FinalsSpaceComponent} from "./components/finals-space/finals-space.component";
import {InicioComponent} from "./components/inicio/inicio.component";

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'mhw', component: MhwComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: 'space', component: FinalsSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
