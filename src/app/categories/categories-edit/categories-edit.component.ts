import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.sass']
})
export class CategoriesEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('id'));

    // this.http.post('get-category',
    //   {
    //     id: this.route.snapshot.paramMap.get('id')
    //   }
    // ).subscribe(category => {

    // })


  }
}
