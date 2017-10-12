import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router:Router, @Inject(DOCUMENT) private document: Document) {
      router.events.subscribe((val) => {
        console.log(val instanceof NavigationEnd)
        this.document.body.scrollTop = 0;
      });
    }
}
