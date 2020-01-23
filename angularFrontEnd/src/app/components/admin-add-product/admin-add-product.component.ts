import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  public title: string;
  public desc: string;
  public price: number;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {}

  addProduct({form, value, valid}) {
    form.reset();
    if (valid) {
      this.productService.postAddProduct(value).subscribe(res => {
          if (res == 'productExists') {
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
              })
          }
      });
  } else {
      console.log('Form is not valid.');
  }
 }
}
