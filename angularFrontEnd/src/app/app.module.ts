import { RegisterComponent } from './components/register/register.component';
import { PagesComponent } from './components/pages/pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PageService } from './services/page.service';

import { Title } from'@angular/platform-browser';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './components/products/products.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';


const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'admin/pages', component: AdminPagesComponent},
  {path: 'admin/add-page', component: AdminAddPageComponent},
  {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
  {path: ':page', component: PagesComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'admin/add-product', component: AdminAddProductComponent},
  {path: 'admin/edit-product/:id', component: AdminEditProductComponent},
  {path: '', component: PagesComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    PagesComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminNavbarComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PageService,
    Title, 
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
