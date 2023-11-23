import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductManagementAPIServiceService } from 'src/app/Services/product-management-apiservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent  implements OnInit {
  product: Product;

  updateProductForm: FormGroup;
  titleInput: FormControl;
  descriptionInput: FormControl;

  constructor(
    private productManagementAPIService: ProductManagementAPIServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {
    this.titleInput = new FormControl('', []);
    this.descriptionInput = new FormControl('', []);
    this.updateProductForm = new FormGroup({
      title: this.titleInput,
      description: this.descriptionInput,
    });

    this.product = new Product(null, '', '', []);
  }

  ngOnInit(): void {
    const projectId: number | null = this.activatedRoute.snapshot.params['id'];

    if (projectId !== null) {
      this.productManagementAPIService.getProduct(projectId).subscribe({
        next: (product: Product) => {
          this.product = product;

          // Set default values for form
          this.titleInput.setValue(product.title);
          this.descriptionInput.setValue(product.description);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  updateProduct(): void {
    // Update project
    const product: Product= new Product(this.product.id, this.updateProductForm.value.title, this.updateProductForm.value.description, this.product.carts);
    this.productManagementAPIService.updateProduct(product).subscribe({
      next: () => {
        // Redirect to detail page
        this.router.navigate(['/products', this.product.id]);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteProduct(): void {
    // Delete project
    this.productManagementAPIService.deleteProduct(this.product.id).subscribe({
      next: () => {
        // Redirect to project list
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}