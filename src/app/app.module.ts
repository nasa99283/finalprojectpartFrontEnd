import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/Login/login/login.component';
import { SignUpComponent } from './component/Signup/sign-up/sign-up.component';
import { NavBarComponent } from './component/NavBar/nav-bar/nav-bar.component';
import { HomeComponentComponent } from './component/Home/home-component/home-component.component';
import { ProductListComponent } from './component/productList/product-list/product-list.component';
import { ProductDetailsComponent } from './component/productDetails/product-details/product-details.component';
import { AddProductComponent } from './component/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './component/EditProduct/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AddCategoryComponent } from './component/AddCategory/add-category/add-category.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    HomeComponentComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    NotFoundComponent,
    AddCategoryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // new
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
