import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  product: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;
  errorMsg2: boolean = false;
  title: string;
  desc: string;
  price: number;
  id: string;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.productService.getEditProduct(this.param).subscribe(product => {
        this.product = product;
        this.title = product.title;
        this.desc = product.desc;
        this.price = product.price;
        this.id = product._id;
      })
    });
  }

  editProduct({ value, valid}) {
    if (valid) {
        this.productService.postEditProduct(value).subscribe(res => {
            if (res == 'productExists') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
                }.bind(this),2000);
            } else if (res == 'problem') {
                this.errorMsg2 = true;
                setTimeout(function() {
                    this.errorMsg2 = false;
                }.bind(this),2000);
            } else {
                this.successMsg = true;
                setTimeout(function() {
                    this.successMsg = false;
                }.bind(this),2000);
                this.productService.getProducts().subscribe(products => {
                    this.productService.productsBS.next(products);
                });
            }
        });
    } else {
        console.log('Form is not valid.');
    }
  }
}
