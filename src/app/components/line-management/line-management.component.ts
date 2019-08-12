import { Component, OnInit, Input } from '@angular/core';
import { TrainLine } from 'src/app/models/train-line';

@Component({
  selector: 'app-line-management',
  templateUrl: './line-management.component.html',
  styleUrls: ['./line-management.component.less']
})
export class LineManagementComponent implements OnInit {

  constructor() { }

  @Input() trainLines:TrainLine[];

  ngOnInit() {
  }

}
