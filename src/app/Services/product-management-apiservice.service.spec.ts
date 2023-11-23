import { TestBed } from '@angular/core/testing';

import { ProductManagementAPIServiceService } from './product-management-apiservice.service';

describe('ProductManagementAPIServiceService', () => {
  let service: ProductManagementAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductManagementAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
