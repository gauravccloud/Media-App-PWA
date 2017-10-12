import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../app.service';

@Component({
    selector: 'listing-must-watch',
    templateUrl: 'listing-must-watch.component.html',
    styleUrls: ['listing-must-watch.component.css']
})


export class ListingMustWatchComponent implements OnInit {

    constructor(private route: ActivatedRoute, private dataService:DataService) {}
    searchItems: Array<any> = [];
    isRequestCompleted: Boolean = true;
    containerKey: number = 1;
    containerData:Array<any> = [];
    containerKeyData = [];

    ngOnInit() {
        this.onScrollDown()
    }

    onScrollDown() {
        console.log('scrolled down!!');
        if(this.isRequestCompleted && this.containerKey < 6) {
            this.isRequestCompleted = false;
            this.dataService.getWatchListData(this.containerKey).then(res => {
                console.log("Response is", res);
                let temp = {};
                temp["storyType"] = "Watch Later";
                temp["data"] = res;
                this.searchItems = this.searchItems.concat(res);
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

}