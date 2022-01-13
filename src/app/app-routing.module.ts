import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './shared/layouts/layouts.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesCreateComponent, CategoriesEditComponent } from "./categories/index";
const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: '/categories', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: ProductsCreateComponent },
      { path: 'products/edit/:id', component: ProductsEditComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/create', component: CategoriesCreateComponent },
      { path: 'categories/edit/:id', component: CategoriesEditComponent }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
