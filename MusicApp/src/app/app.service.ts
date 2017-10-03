import { Injectable } from "@angular/core";
import {HttpModule, Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    constructor(private http:Http) {}

    getData(containerKey): Promise<any> {
    let head = new Headers({ 'Content-Type': 'application/json' });
      var formData = {};
      let options = new RequestOptions({ headers: head, method:"post",body:JSON.stringify({})});
      var url = "http://localhost:9001/getHomePageData/"+containerKey;
      return this.http
            .post(url, JSON.stringify(formData), options)
            .toPromise()
            .then(res => res.json().data)
            .catch();
    }
}