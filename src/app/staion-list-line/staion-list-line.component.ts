import {Component, Input, OnInit} from '@angular/core';
import {StationValley} from '../../shared/station-valley';
import {Station} from '../../shared/station';

@Component({
  selector: 'av-staion-list-line',
  templateUrl: './staion-list-line.component.html',
  styleUrls: ['./staion-list-line.component.scss']
})
export class StaionListLineComponent implements OnInit {
  @Input() station: StationValley;
  descriptions = Station.descriptions;
  units = Station.units;

  constructor() { }

  ngOnInit() {
  }


}
