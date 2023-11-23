import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductManagementAPIServiceService } from 'src/app/Services/product-management-apiservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit {

 product: Product;
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private productManagementAPIService: ProductManagementAPIServiceService
  ) {
    this.product = new Product(null, "", "", [],);
  }
 
  ngOnInit(): void {
    this.reloadProduct(); 
  }
 
  reloadProduct(): void {
    
    const productId: number | null = this.activatedRoute.snapshot.params["id"];
 
    if (productId !== null) {
      this.productManagementAPIService.getProduct(productId).subscribe({
        next: (product: Product) => {
          this.product = product;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
  



