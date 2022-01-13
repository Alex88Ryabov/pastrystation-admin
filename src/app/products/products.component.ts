import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/products.json')
      .subscribe(products => {
        this.products = products;     
      })
      

      
      }

}
