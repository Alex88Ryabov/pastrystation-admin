import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './shared/layouts/layouts.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesCreateComponent, CategoriesEditComponent } from "./categories/index";
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthGuard } from './shared/services/auth.guard';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/authorization', pathMatch: 'full' },
  {
    path: '', 
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: ProductsCreateComponent },
      { path: 'products/edit/:id', component: ProductsEditComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/create', component: CategoriesCreateComponent },
      { path: 'categories/edit/:id', component: CategoriesEditComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  },
  {
    path: 'authorization', component: AuthorizationComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
