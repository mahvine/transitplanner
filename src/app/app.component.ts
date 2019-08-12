import { Component, OnInit } from '@angular/core';
import { TrainLineService } from './services/train-line.service';
import { TrainLine } from './models/train-line';
declare let L;
// import '../../node_modules/leaflet-providers/leaflet-providers.js'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  private trainLines:TrainLine[];

  constructor(private trainLineService:TrainLineService) {

  }

  ngOnInit() {
      const map = L.map('map').setView([14.59056, 120.98075], 14);

      map.on('click', (e)=>{
        console.log('['+e.latlng.lat+','+e.latlng.lng+']');
      });


      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      this.trainLineService.getTrainLines().subscribe( resp => {
        this.trainLines = resp;
        this.trainLines.map(trainLine=>{
          const latLangs = trainLine.path;
          const color = trainLine.color;
          const polyLine = L.polyline(latLangs, {color: color, weight: 6}).addTo(map);
        });
      });
  }

}