import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import { Observable, forkJoin } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap, tap} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

    @Input() name: any;
    categories: any;
    products: any;
    isInitForm: boolean = false;

    constructor(private http: HttpClient) {
    }


    // ngOnInit(): void {
    //     this.http.get(`${environment.apiUrl}/api/products`)
    //         .subscribe((res: any) => {
    //             this.products = res;
    //         });
    // }
    ngOnInit() {
        let categoriesData = this.http.get(`${environment.apiUrl}/api/categories`);
        let productsData = this.http.get(`${environment.apiUrl}/api/products`);

        forkJoin([categoriesData, productsData]).subscribe(results => {

            this.categories = results[0];
            this.products = results[1];
            console.log(this.categories);
        });
    }

    removeProductById(product: any): void {
        const isDelete = confirm(`Вы действительно хотите удалить категорию ${product.name}`);

        if (isDelete) {
            this.http.delete(`${environment.apiUrl}/api/products/${product.id}`)
                .subscribe((res: any) => {
                    alert(res.message);
                    this.http.get(`${environment.apiUrl}/api/products`)
                        .subscribe((res: any) => {
                            this.products = res;
                        });

                });

        }

    }

}
