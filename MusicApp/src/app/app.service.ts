import { Injectable } from "@angular/core";
import {HttpModule, Http, Response, RequestOptions, Headers} from "@angular/http";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { BANNERIMAGE, HOMEPAGEDATA1,HOMEPAGEDATA2, HOMEPAGEDATA3, SEARCHDATA } from './mock-data';

@Injectable()
export class DataService {

    constructor(private http:Http) {}
    getData(containerKey): Promise<any> {
    let head = new Headers({ 'Content-Type': 'application/json' });
      var formData = {};
      let options = new RequestOptions({ headers: head, method:"post",body:JSON.stringify({})});
      var url = "https://obscure-bastion-11592.herokuapp.com/getHomePageData/"+containerKey;
      return this.http
            .post(url, JSON.stringify(formData), options)
            .toPromise()
            .then(res => res.json().data)
            .catch();
    }

    searchByQuery(searchQuery) {
        let head = new Headers({ 'Content-Type': 'application/json' });
        var formData = {};
        let options = new RequestOptions({ headers: head, method:"post",body:JSON.stringify({})});
        var url = "https://obscure-bastion-11592.herokuapp.com/searchData/"+searchQuery;
        return this.http
            .post(url, JSON.stringify(formData), options)
            .toPromise()
            .then(res => res.json().data)
            .catch();
    }

    getWatchListData(key) {
        let head = new Headers({ 'Content-Type': 'application/json' });
        var formData = {};
        let options = new RequestOptions({ headers: head, method:"post",body:JSON.stringify({})});
        var url = "https://obscure-bastion-11592.herokuapp.com/watchList/"+key;
        return this.http
            .post(url, JSON.stringify(formData), options)
            .toPromise()
            .then(res => res.json().data)
            .catch();
    }

    getDataInDelay(key):Promise<any> {
      console.log("Key Data",key);
      return new Promise(resolve => {
        setTimeout(() => resolve(this.getHomePageData(key)), 600);
      });
    }

    getHomePageData(key): Promise<any> {
        if(key == 1) {
            return Promise.resolve(HOMEPAGEDATA1)
        } else if(key == 2 || key == 4) {
            return Promise.resolve(HOMEPAGEDATA2)
        } else if(key == 3 || key ==5) {
            return Promise.resolve(HOMEPAGEDATA3)
        } else {
          return Promise.resolve(HOMEPAGEDATA1);
        }
    }

    getSearchDatayDelay(query): Promise<any> {
      return new Promise(resolve => {
          setTimeout(() => resolve(this.getSearchData()), 600);
      });
    };

    getSearchData(): Promise<any> {
        return Promise.resolve(SEARCHDATA);
    }

    getBannerImages() {
        return BANNERIMAGE;
    }

}
