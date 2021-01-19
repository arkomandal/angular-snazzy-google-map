// / <reference types="@types/googlemaps" />
import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// // import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';
// declare let google: any;

// import { google } from '@google/maps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  map: google.maps.Map;
  // title = 'gplace';
  // @ViewChild('search', { static: false })
  // public searchElementRef: ElementRef;

  public zoom: number = 8;
  public latitude: number = 40.7128;
  public longitude: number = 74.0060;
  public latlongs: any = [];
  public latlong: any = {};
  // public searchControl: FormControl;

  styles = [
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#193341"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c5a71"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#29768a"
        },
        {
          "lightness": -37
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#406d80"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#406d80"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#3e606f"
        },
        {
          "weight": 2
        },
        {
          "gamma": 0.84
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "weight": 0.6
        },
        {
          "color": "#1a3541"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c5a71"
        }
      ]
    }
  ];

  // constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  // }

  // ngOnInit() {
  //   this.zoom = 8;
  //   this.latitude = 39.8282;
  //   this.longitude = -98.5795;

  //   this.searchControl = new FormControl();
  //   this.setCurrentPosition();

  //   this.mapsAPILoader.load().then(() => {
  //     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: [],
  //       // componentRestrictions: { 'country': 'IN' }
  //     });
  //     autocomplete.addListener('place_changed', () => {
  //       this.ngZone.run(() => {
  //         const place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //         const latlong = {
  //           latitude: place.geometry.location.lat(),
  //           longitude: place.geometry.location.lng()
  //         };
  //         this.latlongs.push(latlong);
  //         this.searchControl.reset();
  //       })
  //     })
  //   })
  // }

  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 8;
  //     })
  //   }
  // }

}
