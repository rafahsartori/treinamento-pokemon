import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainersUrl);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    private trainersUrl = 'http://localhost:8080/treinador'

  getTrainer(id: number): Observable<Trainer> {
    const url =`${this.trainersUrl}/${id}`;
    return this.http.get<Trainer>(url);
  }

  updateTrainer (trainer: Trainer): Observable<any> {
    return this.http.put(this.trainersUrl, trainer, httpOptions);
  }  

  addTrainer (trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(this.trainersUrl, trainer, httpOptions);
  }

  deleteTrainer (trainer: Trainer | number): Observable<Trainer> {
    const id = typeof trainer === 'number' ? trainer : trainer.id;
    const url = `${this.trainersUrl}/${id}`;

    return this.http.delete<Trainer>(url, httpOptions);
  }

}
