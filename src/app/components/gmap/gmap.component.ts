import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {AgmCoreModule, LatLng, MouseEvent} from 'angular2-google-maps/core';
// declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  title: string = 'Select city and rigth click on it';
  @Input()
  lat: number = 49.0458331;
  @Input()
  lng: number = 33.4465606;
  @Input()
  zoom: number = 7;

  @Output() 
  updateCoord = new EventEmitter<{lat: number, lng: number}>();

  constructor() {
  }

  ngOnInit() {

  }
  mapRightClick(event: MouseEvent) {
    const lat = event.coords.lat;
    const lng = event.coords.lng;
    this.updateCoord.emit({lat, lng});
  }
  setPosition(lat: number, lng : number, zoom: number) {
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;
  }
}
