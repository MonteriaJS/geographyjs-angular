import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  lng: number = -72.961944444444;
  lat: number = 4.0897222222222;
  zoom : number = 6;
  scrollwheel: boolean = true; 

  constructor() { }

  ngOnInit() {
  }

}
