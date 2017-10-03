import { Component, OnInit, ElementRef, asNativeElements } from "@angular/core";
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { DataService } from '../../app.service';
import "rxjs/";

@Component({
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

    constructor(private dataService:DataService){}

    ngOnInit() {
        this.storyType = "Watch";
        this.onScrollDown();
    };

    onScrollDown() {
        console.log('scrolled down!!');
        if(this.isRequestCompleted && this.containerKey < 6) {
            this.isRequestCompleted = false;
            this.dataService.getData(this.containerKey).then(res => {
                console.log("Response is", res);
                let temp = {};
                temp["storyType"] = "Watch Later";
                // temp["data"] = res;
                temp["data"] = this.chunkData(res,4);
                this.containerData.push(temp);
                this.isRequestCompleted = true;
                this.containerKey++;
            })       
        } else {
            return;
        }
	};

	onScrollUp () {
    	console.log('scrolled up!!')
    };

    chunkData(arr,size=4) {
        let newArr = [];
        for (let i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    }
};   