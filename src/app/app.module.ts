import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StationListComponent } from './station-list/station-list.component';
import { HomeComponent } from './home/home.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {DiagramItemComponent} from './diagram-item/diagram-item.component';
import {StationItemComponent} from './station-item/station-item.component';
import {WeatherService} from '../shared/weather-service';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StaionListLineComponent } from './staion-list-line/staion-list-line.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    HomeComponent,
    DiagramItemComponent,
    StationItemComponent,
    StaionListLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
