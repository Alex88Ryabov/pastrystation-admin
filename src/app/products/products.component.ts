import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

    @Input() name: any;
    products: any;
    isInitForm: boolean = false;
    constructor(private http: HttpClient) {
    }


    ngOnInit(): void {
        this.http.get(`${environment.apiUrl}/api/products`)
            .subscribe((res: any) => {
                this.products = res;
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
