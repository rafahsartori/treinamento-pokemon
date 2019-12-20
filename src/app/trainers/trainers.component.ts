import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[];

  selectedTrainer: Trainer;
  onSelect(trainer: Trainer): void {
    this.selectedTrainer = trainer;
  }

  getTrainers(): void {
    this.trainerService.getTrainers()
      .subscribe(trainers => this.trainers = trainers);
  }

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.getTrainers();
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.trainerService.addTrainer({ nome } as Trainer)
      .subscribe(trainer => {
        this.trainers.push(trainer);
      })
  }

  delete(trainer: Trainer): void {
    this.trainers = this.trainers.filter(h => h !== trainer);
    this.trainerService.deleteTrainer(trainer).subscribe();
  }

}
