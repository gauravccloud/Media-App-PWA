import { Component } from "@angular/core";
import { RouterModule, Route, Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'nav-bar-comp',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.css']
})


export class NavBarComponent {
    searchQuery: String;
    
    searchData(event:any) {
        if(event.keyCode === 13) {
            console.log("Enter key hit");
            this.navigateToSearch();
        } else {
            return;
        }
    }

    constructor(private route:Router) {}

    navigateToSearch() {
        let navigationExtras: NavigationExtras = {
            queryParams: { 'q': this.searchQuery }
        };
        this.route.navigate(['/search'], navigationExtras);
    }

    

}