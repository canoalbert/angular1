import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  pokemonCards: any[] = [];
  loading = true;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonInfo().subscribe(
      (data: any) => {
        this.pokemonCards = data.data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener datos de la API Pokémon TCG', error);
        this.loading = false;
      }
    );
  }

  getAttacksNames(attacks: any[]): string {
    return attacks.map(attack => attack.name).join(', ');
  }
}
