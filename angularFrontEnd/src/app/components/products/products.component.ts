import { PageService } from './../../services/page.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(public productService: ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe(products => {

      this.productService.productsBS.next(products);
      this.products = this.productService.productsBS;
    });

  }

}
