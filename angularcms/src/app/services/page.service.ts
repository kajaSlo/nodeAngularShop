import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';


//comment




@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: Http) { }

  public pagesBS = new BehaviorSubject<string>(null);

  getPages(){
    return this.http.get('http://localhost:3000/pages').pipe(map(res => res.json()))
   
  }

  getPage(slug){
    return this.http.get('http://localhost:3000/pages/' + slug ).pipe(map(res => res.json()))

  }
};
