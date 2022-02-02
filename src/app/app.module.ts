import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CategoriesModule} from './categories/categories.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ProductsModule} from './products/products.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthorizationComponent} from './authorization/authorization.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenInterceptor} from './shared/services/token-interceptor.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        CategoriesModule,
        ProductsModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule

    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
