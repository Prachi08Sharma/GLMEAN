import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { ContactUsComponent } from './share/contact-us/contact-us.component';
import { RegisterComponent } from './share/register/register.component';
// import { FooterComponent } from './share/footer/footer.component';
// import { NavbarComponent } from './share/navbar/navbar.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'all-products', component:AllProductsComponent},
  // {path:'navbar', component:NavbarComponent},
  {path:'order-form', component:OrderFormComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'register', component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
