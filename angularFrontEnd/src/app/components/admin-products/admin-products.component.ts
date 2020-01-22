import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: any;
  successMsg: boolean = false;
  errorMsg: boolean = false;

  constructor( 
    private router: Router,
    private productService: ProductService 
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productService.productsBS.next(products);
      this.products = this.productService.productsBS;
    });
  }

  deleteProduct(id) {
    if (confirm('Confirm deletion')) {
        this.productService.getDeleteProduct(id).subscribe(res => {
            if (res == 'error') {
                this.errorMsg = true;
                setTimeout(function() {
                    this.errorMsg = false;
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
    }
  }
}
