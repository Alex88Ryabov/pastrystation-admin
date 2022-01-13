import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.sass']
})
export class ProductsCreateComponent implements OnInit {
  flagToggle = true;
  toggle = true;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    icon: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required])
  })
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
