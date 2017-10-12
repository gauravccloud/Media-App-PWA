import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes, Resolve } from "@angular/router";

import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search-items/search-item.component'
import { ListingComponent } from './components/listing/listing.component';
import { ListingMustWatchComponent } from './components/listing-must-watch/listing-must-watch.component';

import { SearchResolve } from './search.resolve';

const APP_ROUTES:Routes = [
    {
        path:"",
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path:"home",
        component:CarouselComponent
    },
    {
        path: "search",
        component: SearchComponent,
        resolve: {
            items: SearchResolve
        }
    },
    {
        path: 'listing',
        component: ListingComponent,
        children: [
            {
                path:'',
                redirectTo: 'must_watch_videos',
                pathMatch: 'full'
            },
            {
                path:'must_watch_videos',
                component: ListingMustWatchComponent,
            }
        ]
    }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);