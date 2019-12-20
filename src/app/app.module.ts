import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/cli/bin/angular-pokemon/node_modules/@angular/common/http';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ], 
  declarations: [
    AppComponent,
    TrainersComponent,
    TrainerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PokemonsComponent,
    PokemonDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
