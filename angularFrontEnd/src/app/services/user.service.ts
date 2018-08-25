import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  register(user){
    return this.http.post('http://localhost:3000/users/register', user).pipe(map(res => res.json()))   
  }

  login(user){
    return this.http.post('http://localhost:3000/users/login', user).pipe(map(res => res.json()))   
  }
}
