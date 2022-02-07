import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';


@Component({
    selector: 'app-categories-create',
    templateUrl: './categories-create.component.html',
    styleUrls: ['./categories-create.component.sass']
})
export class CategoriesCreateComponent implements OnInit {

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required])
    });

    image: any;

    categories: any;
    isLoadCategories: any;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
        this.http.get(`${environment.apiUrl}/api/categories`)
            .subscribe((res: any) => {
                console.log(res);
                this.categories = res;

            });
    }

    onSubmit() {
        const formData = new FormData();
        formData.append('image', this.image, this.image.name)
        formData.append('name', this.form.get('name')?.value)
        this.http.post(`${environment.apiUrl}/api/categories`, formData)
            .subscribe((res: any) => {
                alert(res.message);
                this.router.navigate(['categories']).finally();
            });
    }


    setImage(file: any): void {
        this.image = file;
    }
}
