import { Component, OnInit } from '@angular/core';
import {StationValley} from '../../shared/station-valley';
import {WeatherService} from '../../shared/weather-service';
import {Station} from '../../shared/station';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'av-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  private stations: StationValley[] = null;
  private i: number;
  displayedColumns: string[] = ['name', 't', 'n', 'p'];
  descriptions = Station.descriptions;
  units = Station.units;
  constructor(private ws: WeatherService, private route: ActivatedRoute, private router: Router) {}
  sortOrder;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ws.getAll(params.sortOrder).subscribe(stations => this.stations = stations);
    });
    this.route.params.subscribe(params => {
      this.sortOrder = params.sortOrder;
    });
  }

  handleStationSelected(station: StationValley) {
    this.router.navigate(
      ['/stations', this.sortOrder, station.code]
    );
  }

}
