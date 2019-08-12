import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainLine } from '../models/train-line';

@Injectable({
  providedIn: 'root'
})
export class TrainLineService {

  constructor(private http:HttpClient) { }

  public getTrainLines(): Observable<TrainLine[]> {
    return this.http.get<TrainLine[]>('/assets/train-line.json');
  }
}
