import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/Product';
import { ProductManagementAPIServiceService } from 'src/app/Services/product-management-apiservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output()
  productCreatedEvent: EventEmitter<void>;
 
  createProductForm: FormGroup;
  titleInput: FormControl;
  descriptionInput: FormControl;
 
  constructor(
    private productManagementAPIService: ProductManagementAPIServiceService
  ) {
    this.titleInput = new FormControl("", [Validators.required]);
    this.descriptionInput = new FormControl("", [Validators.required]);
    this. createProductForm = new FormGroup({
      title: this.titleInput,
      description: this.descriptionInput,
    });
 
    this.productCreatedEvent = new EventEmitter<void>();
  }
 
  ngOnInit(): void {}
 
  createProduct(): void {
    const product: Product = new Product(
      null,
      this. createProductForm.value.title,
      this. createProductForm.value.description,
      []
    );
 
    // Store product in database
    this.productManagementAPIService.createProduct(product).subscribe({
      next: () => {
        // Reset form
        this.titleInput.setValue("");
        this.descriptionInput.setValue("");
 
        // Update product list
        this.productCreatedEvent.emit();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

