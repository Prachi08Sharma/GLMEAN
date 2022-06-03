import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { OrderFormComponent } from './pages/order-form/order-form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './share/contact-us/contact-us.component';
import { RegisterComponent } from './share/register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AllProductsComponent,
    OrderFormComponent,
    GalleryComponent,
    ContactUsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
