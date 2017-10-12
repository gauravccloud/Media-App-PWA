import { Component, OnInit, ElementRef, asNativeElements,ViewEncapsulation, ViewChild, HostListener } from "@angular/core";
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Router } from '@angular/router';
import {OwlCarousel} from 'ngx-owl-carousel';
import { DataService } from '../../app.service';
import "rxjs/";
declare var jquery:any;
declare var $ :any;
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Carousel } from './Carousel';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'carousel-comp',
    templateUrl: 'carousel.component.html',
    styleUrls: ['carousel.component.css']
})

export class CarouselComponent implements OnInit {
    storyType:String;
    isRequestCompleted: Boolean = true;
    containerKey: number = 1;
    containerData:Array<any> = [];
    containerKeyData = [];
    slides: Array<any> = [];
    slideConfig: any;
    @ViewChild('owlElement') owlElement: OwlCarousel;
    numItem: number;
    bannerImg: Array<any>;
    showNavigationBar: Boolean;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.ngOnInit();
    }

    public carouselBanner: Carousel;

    constructor(private dataService:DataService, private config:NgbCarouselConfig, private router:Router){}

    ngOnInit() {
        this.storyType = "Watch";
        this.bannerImg = this.dataService.getBannerImages();
        if(window.screen.width < 780 ) {
            this.onScrollDown();
            this.numItem = 3;
            this.showNavigationBar = false;
        } else {
            this.onScrollDown();
            this.numItem = 6;
            this.showNavigationBar = true;
        }

        this.carouselBanner = {
         grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
         slide: 1,
         speed: 400,
         interval: 20000,
         point: true,
         load: 1,
         loop: true,
         custom: 'banner',
         touch: true,
         dynamicLength: true,
         easing:"ease"
       }
    }

    onScrollDown() {
        if(this.isRequestCompleted && this.containerKey < 6) {
            this.isRequestCompleted = false;
            this.dataService.getDataInDelay(this.containerKey).then(res => {
                console.log("Response is", res);
                let temp = {};
                let storyType = ["Shows","Sports Showcase","Latest Episodes","Web Originals","LIVE Channels","Watch Later"];
                if(window.screen.width < 780 ) {
                    temp["data"] = res[0].assets
                    temp["data"] = temp["data"]
                    temp["storyType"] = storyType[this.containerKey];
                    this.numItem = 3;
                } else {
                    temp["data"] = res[0].assets;
                    temp["data"] = temp["data"]
                    temp["storyType"] = storyType[this.containerKey];
                    this.numItem = 4;
                }
                this.containerData.push(temp);
                this.isRequestCompleted = true;
                this.containerKey++;
            })
        } else {
            return;
        }
	}

	 onScrollUp () {
    	console.log('scrolled up!!')
    }

    chunkData(arr,size=6) {
        let newArr = [];
        for (let i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    }

    seeAllListings() {
        this.router.navigate(['/listing']);
    }
}
