import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxCarouselModule } from 'ngx-carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpModule } from '@angular/http'
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DataService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxCarouselModule,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
