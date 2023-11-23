import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/Category';
import { ProductManagementAPIServiceService } from 'src/app/Services/product-management-apiservice.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  @Output()
 categoryCreatedEvent: EventEmitter<void>; 

  @Input()
  productId!: number | null;

  createCategoryForm: FormGroup;
  titleInput: FormControl;
  descriptionInput: FormControl;

  constructor(
    private productManagementAPIService:ProductManagementAPIServiceService
  ) {
    this.titleInput = new FormControl('', [Validators.required]);
    this.descriptionInput = new FormControl('', [Validators.required]);
    this.createCategoryForm = new FormGroup({
      title: this.titleInput,
      description: this.descriptionInput,
    });

    this.categoryCreatedEvent = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  createcategory(): void {
    const category: Category = new Category(null, this.createCategoryForm.value.title, this.createCategoryForm.value.description, this.productId);

    // Store task in database
    this.productManagementAPIService.createCategory(category).subscribe({
      next: () => {

        // Reset form
        this.titleInput.setValue('');
        this.descriptionInput.setValue('');

        // Trigger event to update task list
        this.categoryCreatedEvent.emit();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}


