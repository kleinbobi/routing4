import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StationListComponent} from './station-list/station-list.component';
import {StationItemComponent} from './station-item/station-item.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'stations/:sortOrder', component: StationListComponent},
  { path: 'stations/:sortOrder/:code', component: StationItemComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
