import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of (POKEMONS);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return of (POKEMONS.find(pokemon => pokemon.id === id));
  }
}
