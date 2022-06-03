import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { HomeComponent } from './pages/home/home.component';
// import { FooterComponent } from './share/footer/footer.component';
// import { NavbarComponent } from './share/navbar/navbar.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'all-products', component:AllProductsComponent},
  // {path:'navbar', component:NavbarComponent},
  {path:'order-form', component:HomeComponent},
  {path:'gallery', component:HomeComponent},
  {path:'contact-us', component:HomeComponent},
  {path:'register', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
