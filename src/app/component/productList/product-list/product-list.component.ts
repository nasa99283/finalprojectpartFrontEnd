import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductManagementAPIServiceService } from 'src/app/Services/product-management-apiservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];

  constructor(
    private productManagementAPIService: ProductManagementAPIServiceService
  ) {
    this.products = []
  }

  ngOnInit(): void {
    this.updateProductList();
  }

  updateProductList() {
    this.productManagementAPIService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}