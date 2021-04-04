import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutusComponent} from './pages/aboutus/aboutus.component';
import {ProductsComponent} from './pages/products/products.component';
import {CareerComponent} from './pages/career/career.component';
import {ServicesComponent} from './pages/services/services.component';
import {ContactComponent} from './pages/contact/contact.component';
import {CompanystrComponent} from './pages/companystr/companystr.component';

const routes: Routes = [
  {path : 'aboutus', component : AboutusComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'careeer', component : CareerComponent},
  {path : 'services', component : ServicesComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'company', component : CompanystrComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
