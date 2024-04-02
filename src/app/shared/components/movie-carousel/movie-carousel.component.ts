import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(900, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit,AfterViewInit {
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @Input() VideoContents:IVideoContent[]=[]
  @Input() title!:string;
  selectedContent: string | null = null;

 
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
        300: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 2,
          centeredSlides: true,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 2,
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


  setHoverMovie(movie: IVideoContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }
}
