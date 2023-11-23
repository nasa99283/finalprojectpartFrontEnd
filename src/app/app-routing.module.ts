import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './component/Home/home-component/home-component.component';
import { LoginComponent } from './component/Login/login/login.component';
import { SignUpComponent } from './component/Signup/sign-up/sign-up.component';
import { ProductListComponent } from './component/productList/product-list/product-list.component';
import { ProductDetailsComponent } from './component/productDetails/product-details/product-details.component';
import { EditProductComponent } from './component/EditProduct/edit-product/edit-product.component';
import { AuthGuardServiceService } from './Services/auth-guard-service.service';

import { NotFoundComponent } from './component/not-found/not-found.component';
import { AddCategoryComponent } from './component/AddCategory/add-category/add-category.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuardServiceService],
    component: HomeComponentComponent,
  },



  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignUpComponent,
  },
  {
    path: "products",
    canActivate: [AuthGuardServiceService],
    component: ProductListComponent,
  },
  {
    path: "products/:id",
    canActivate: [AuthGuardServiceService],
    component: ProductDetailsComponent,
  },
  {
    path: "products/:id/edit",
    canActivate: [AuthGuardServiceService],
    component: EditProductComponent,
  },
{
  path: "**",
 
  component: NotFoundComponent,
},
{
  path: "categories",
 
  component:AddCategoryComponent,
},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
 

export class AppRoutingModule { }

