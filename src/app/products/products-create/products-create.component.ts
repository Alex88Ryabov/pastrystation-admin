import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {mergeMap, tap} from 'rxjs/operators';
import {sha256} from 'js-sha256';

@Component({
    selector: 'app-products-create',
    templateUrl: './products-create.component.html',
    styleUrls: ['./products-create.component.sass']
})
export class ProductsCreateComponent implements OnInit {
    toggle = true;
    form: FormGroup;
    infoFormGroups: any;
    categories: any;
    image: any;
    imgSrc: any;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
        this.http.get(`${environment.apiUrl}/api/categories`)
            .subscribe((res: any) => {
                this.categories = res;
                this.form = new FormGroup({
                    name: new FormControl('', [Validators.required]),
                    image: new FormControl('', [Validators.required]),
                    price: new FormControl('', [Validators.required]),
                    categoryId: new FormControl(this.categories[0].id, [Validators.required]),
                    description: new FormControl('', [Validators.required])
                });
                console.log(this.categories);
            });
    }

    onSubmit() {
        const formData = new FormData();

        formData.append('image', this.image, this.image.name)
        formData.append('name', this.form.get('name')?.value)
        this.http.post(`${environment.apiUrl}/api/products`, formData)
            .subscribe((res: any) => {
                alert(res.message);
                this.router.navigate(['products']).finally();

            });
    }

    addNewAddressGroup() {
        if (!this.form.get('info')) {
            this.form.addControl('info', new FormArray([]))
        }
        const add = this.form.get('info') as FormArray;
        add.push(new FormGroup({
            title: new FormControl(''),
            text: new FormControl('')
        }))
        this.infoFormGroups = (this.form.controls['info'] as FormArray).controls;
    }

    deleteAddressGroup(index: number) {
        const isDelete = confirm('Вы действительно хотите удалить поля?')
        if (isDelete) {
            const add = this.form.get('info') as FormArray;
            add.removeAt(index)
        }
    }

    setImage(file: any): void {
        this.image = file;
    }
}
