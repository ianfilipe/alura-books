import { Component, Input, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([ Pagination ]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
