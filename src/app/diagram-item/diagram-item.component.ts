import {Component, Input, OnInit} from '@angular/core';
import {Station} from '../../shared/station';

@Component({
  selector: 'av-diagram-item',
  templateUrl: './diagram-item.component.html',
  styleUrls: ['./diagram-item.component.scss']
})
export class DiagramItemComponent implements OnInit {

  @Input() station: Station;
  constructor() { }

  ngOnInit() {
  }

}
