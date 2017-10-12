import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'search-item-comp',
    templateUrl: 'search-item.component.html',
    styleUrls: ['search-item.component.css']
})


export class SearchComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}
    searchItems: Array<any> = [];

    ngOnInit() {
        console.log(this.route.snapshot.data['items']);
        this.searchItems = this.route.snapshot.data['items'];
    }
}