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
    /**/
    // this.setMap(44, 33.4);
    this.mapProp = {
            center: new google.maps.LatLng(49, 33.4),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    this.map = new google.maps.Map(document.getElementById('gmap'), this.mapProp);
  }

  setMap(lat: number, lng: number): void {
    this.mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    this.map = new google.maps.Map(document.getElementById('gmap'), this.mapProp);
    //this.map.setCenter(this.mapProp);
  }

}
