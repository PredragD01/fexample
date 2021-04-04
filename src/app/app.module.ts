import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import {RouterModule} from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CompanystrComponent } from './pages/companystr/companystr.component';
import { CareerComponent } from './pages/career/career.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ProductsComponent,
    CompanystrComponent,
    CareerComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
