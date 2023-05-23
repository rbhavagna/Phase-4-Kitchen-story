import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  
  {path:"login",component:AdminLoginComponent},
  {path:"signUp",component:AdminSignUpComponent},

  {path:"home",component:HomeComponent},
  {path:"productDetail/:productId",component:ProductDetailComponent},
  {path:"productUpdate/:id",component:AddproductComponent},
  {path:"buyProduct/:id",component:BuyProductComponent},
  {path:"orderDetails",component:OrderDetailsComponent},
  {path:"**",component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
