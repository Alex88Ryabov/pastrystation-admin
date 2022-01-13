import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.sass']
})
export class ProductsEditComponent implements OnInit {

  categories: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/categories.json')
    .subscribe(categories => {
      this.categories = categories
    })
  }

}
