import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { RouterModule } from '@angular/router'
import { routing } from './app.routing';
import {OwlModule} from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search-items/search-item.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingMustWatchComponent } from './components/listing-must-watch/listing-must-watch.component';

import { DataService } from './app.service';
import { SearchResolve } from './search.resolve';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    SearchComponent,
    ListingComponent,
    ListingMustWatchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxCarouselModule,
    InfiniteScrollModule,
    HttpModule,
    RouterModule,
    FormsModule,
    routing,
    OwlModule
  ],
  providers: [DataService, SearchResolve, NgbCarouselConfig],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
