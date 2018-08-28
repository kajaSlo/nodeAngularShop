import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  public productsBS = new BehaviorSubject<string>(null);


  getProducts(){
    return this.http.get('http://localhost:3000/products').pipe(map(res => res.json()))
   
  }

  postAddProduct(value){
    return this.http.post('http://localhost:3000/products/add-product' , value).pipe(map(res => res.json()))
   
  }

  getEditProduct(id){
    return this.http.get('http://localhost:3000/products/edit-product/' + id).pipe(map(res => res.json()))
   
  }

  postEditProduct(value){
    return this.http.post('http://localhost:3000/products/edit-product/'+value.id, value).pipe(map(res => res.json()))
   
  }

  getDeleteProduct(id){
    return this.http.get('http://localhost:3000/products/delete-product/' + id).pipe(map(res => res.json()))
   
  }
}
