import {Component, Input, OnInit} from '@angular/core';
import {StationValley} from '../../shared/station-valley';
import {Station} from '../../shared/station';
import {WeatherService} from '../../shared/weather-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'av-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {

  descodemap = {
    temperature: 'LT',
    precipitation: 'N',
    airpressure: 'LD.RED',
    name: 'Oman'
  };
  descriptions = Station.descriptions;
  units = Station.units;
  station: StationValley;
  showcode = 'Oman';
  sortOrder;
  constructor(private ws: WeatherService, private route: ActivatedRoute) {
   // this.ws.get(this.route.snapshot.params.code).subscribe(station => {
   //   this.station = station;
    //  console.log('---------------------------------------------------------------------------------');
     // console.log(station);
   // });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ws.get(params.code).subscribe(station => this.station = station);
    });
    this.sortOrder = this.route.snapshot.params.sortOrder;
    this.showcode = this.descodemap[this.sortOrder];
  }

  time() {
    // tslint:disable-next-line:prefer-const
    let time = this.station.lastUpdated;
    return time.getDay() + '.' + (time.getMonth() + 1) + '.' + time.getFullYear() + '  ' + time.getHours() + ':' + time.getMinutes();
  }
}
