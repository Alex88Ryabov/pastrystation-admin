import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsComponent} from './layouts/layouts.component';
import {ProductsComponent} from '../products/products.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './layouts/partials/header/header.component';
import {SidebarComponent} from './layouts/partials/sidebar/sidebar.component';
import {InputComponent} from './components/forms/input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFileComponent} from './components/forms/input-file/input-file.component';
import {InputPasswordComponent} from './components/forms/input-password/input-password.component';
import { SelectComponent } from './components/forms/select/select.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';


@NgModule({
    declarations: [
        LayoutsComponent,
        ProductsComponent,
        HeaderComponent,
        SidebarComponent,
        InputComponent,
        InputFileComponent,
        InputPasswordComponent,
        SelectComponent,
        TextareaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        LayoutsComponent,
        ProductsComponent,
        HeaderComponent,
        SidebarComponent,
        InputComponent,
        InputFileComponent,
        InputPasswordComponent,
        SelectComponent,
        TextareaComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
