import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setMap(48.9, 33.4);
  }

  setMap(lat: number, lng: number): void {
    var mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    var map = new google.maps.Map(document.getElementById('gmap'), mapProp);
  }

}
