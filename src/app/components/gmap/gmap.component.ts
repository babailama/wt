import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  map: any;
  mapProp: any;
  constructor() {
  }

  ngOnInit() {
    this.setMap(49, 33.4);
  }

  setMap(lat: number, lng: number): void {
    this.mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    console.log(this.map);
    this.map = new google.maps.Map(document.getElementById('gmap'), this.mapProp);
  }
}
