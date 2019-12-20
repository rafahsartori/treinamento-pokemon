import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'trainers/detail/:id', component: TrainerDetailComponent},
  { path: 'trainers', component: TrainersComponent},
  { path: 'pokemons/detail/:id', component: PokemonDetailComponent},
  { path: 'pokemons', component: PokemonsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
