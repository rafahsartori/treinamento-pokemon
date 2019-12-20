import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from '../trainer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {

  @Input() trainer: Trainer;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTrainer();
  }

  getTrainer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainerService.getTrainer(id)
      .subscribe(trainer => this.trainer = trainer);
  }

  goBack(): void  {
    this.location.back();
  }

  save(): void {
    this.trainerService.updateTrainer(this.trainer)
      .subscribe(() => this.goBack());
  }

}
