import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsCreateComponent} from './products-create/products-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        ProductsEditComponent,
        ProductsCreateComponent,

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        SharedModule
    ]
})
export class ProductsModule {
}
