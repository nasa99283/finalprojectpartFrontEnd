import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';


@Injectable({
  providedIn: 'root'
})
export class ProductManagementAPIServiceService {


  readonly API_URL = "http://localhost:8080/api";

  createCategory(category: Category): Observable<Category> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.post<Category>(`${this.API_URL}/categories`, category, options);
  }
 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.get<Product[]>(`${this.API_URL}/products`, options);
  }
 
  getProduct(id: number): Observable<Product> {
    const options = {
      headers: this.getAuthHeader(),
    };
    return this.http.get<Product>(`${this.API_URL}/products/${id}`, options);
  }
 

  createProduct(product: Product): Observable<Product> {
    const options = {
      headers: this.getAuthHeader(),
    };
    return this.http.post<Product>(
      `${this.API_URL}/products`,
      product,
      options
    );
  }
 
  updateProduct(product: Product): Observable<Product> {
    const options = {
      headers: this.getAuthHeader(),
    };
    return this.http.put<Product>(
      `${this.API_URL}/products/${product.id}`,
      product,
      options
    );
  }
 
  deleteProduct(id: number | null): Observable<Product> {
    const options = {
      headers: this.getAuthHeader()
    };
    return this.http.delete<Product>(`${this.API_URL}/products/${id}`, options);
  }

 
 
  private getAuthHeader(): HttpHeaders {
    // Get the token from the local storage
    const token: string | null = localStorage.getItem('authToken');
    if (token === null) {
      throw null;
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }


}
