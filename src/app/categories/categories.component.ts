import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

    @Input() name: any;
    categories: any;

    constructor(private http: HttpClient) {
    }


    ngOnInit(): void {
        this.http.get(`${environment.apiUrl}/api/categories`)
            .subscribe((res: any) => {
                this.categories = res;
            });
    }

    removeCategoryById(category: any): void {
        const isDelete = confirm(`Вы действительно хотите удалить категорию ${category.name}`);

        if (isDelete) {
            this.http.delete(`${environment.apiUrl}/api/categories/${category.id}`)
                .subscribe((res: any) => {
                    alert(res.message);
                    this.http.get(`${environment.apiUrl}/api/categories`)
                        .subscribe((res: any) => {
                            this.categories = res;
                        });

                });

        }

    }

}

// ngOnInit(): void {
//   this.http.get(`${environment.apiUrl}/api/categories`)
//     .subscribe((res: any) => {
//       console.log(res);
//       this.categories = res;

//     })
// }
// onSubmit() {
//   console.log(this.form.getRawValue());

//   const formData = this.form.getRawValue();
//   this.http.post(`${environment.apiUrl}/api/categories`, formData)
//     .subscribe((res: any) => {
//       console.log(res);
//     })
// }
