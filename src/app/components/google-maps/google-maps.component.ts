import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

//ApiKey
  ngOnInit(): void {
    const loader = new Loader({
      apiKey: 'AIzaSyDJYEtQT_m4aLoh3Zb1COeNGh1__qe8Npc'
    })
    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: -150.644 },
        zoom: 7
      })
    })
  }
}
