import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content.interface';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
})
export class MovieCarouselComponent implements OnInit,AfterViewInit {
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @Input() VideoContents:IVideoContent[]=[]
  @Input() title!:string;
 
  ngOnInit(): void {
    console.log(this.VideoContents)
  }

  ngAfterViewInit(): void {
    this.initSwiper()
    
  }

  private initSwiper(){
    return new Swiper(this.swiperContainer.nativeElement,{
      slidesPerView:3,
      slidesPerGroup:2,
      centeredSlides:true,
      loop:true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }
}