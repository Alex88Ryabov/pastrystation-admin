import { NgModule } from '@angular/core';
import { CategoriesComponent, CategoriesEditComponent, CategoriesCreateComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesEditComponent,
    CategoriesCreateComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule
  ]
})
export class CategoriesModule { }
