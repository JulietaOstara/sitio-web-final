import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-carrousel',
  // templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],

  template: `<swiper
    [cssMode]="true"
    [navigation]="true"
    [pagination]="true"
    [mousewheel]="true"
    [keyboard]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide><img src='assets/carrousel/carrousel1.jpg' alt=""></ng-template>
    <ng-template swiperSlide><img src='assets/carrousel/carrousel2.jpg' alt=""></ng-template>
    <ng-template swiperSlide><img src='assets/carrousel/carrousel3.jpg' alt=""></ng-template>
  </swiper>`,
 
  encapsulation: ViewEncapsulation.None,

})
export class CarrouselComponent implements OnInit {

  constructor() { }

  imagenCarrousel1= 'assets/imagenes/carrousel1.jpg';

  ngOnInit(): void {
  }

}
