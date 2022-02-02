import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {mergeMap, tap} from 'rxjs/operators';

@Component({
    selector: 'app-products-edit',
    templateUrl: './products-edit.component.html',
    styleUrls: ['./products-edit.component.sass']
})
export class ProductsEditComponent implements OnInit {
    currentProductId: string | null = null;
    form: FormGroup = new FormGroup({});
    infoFormGroups: any;
    isInitForm: boolean = false;
    product: any;
    fileName: any;
    file: any;
    categories: any;
    description: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.currentProductId = this.route.snapshot.paramMap.get('id');
        this.http.get(`${environment.apiUrl}/api/products/${this.currentProductId}`)
            .pipe(
                tap(product => this.product = product),
                mergeMap(() => this.http.get(`${environment.apiUrl}/api/categories`))
            )
            .subscribe((categories: any) => {
                console.log(this.product);
                this.categories = categories;
                console.log(categories);
                this.form.addControl('name', new FormControl(this.product.name));
                this.form.addControl('image', new FormControl(''));
                this.form.addControl('price', new FormControl(this.product.price));
                this.form.addControl('categoryId', new FormControl(this.product.categoryId));
                this.form.addControl('description', new FormControl(this.product.description));
                const formArrayInfo: any[] = [];

                this.product.info?.forEach((control: any) => {
                    formArrayInfo.push(new FormGroup({
                        title: new FormControl(control.title),
                        text: new FormControl(control.text)
                    }))
                })

                this.form.addControl('info', new FormArray(formArrayInfo));
                this.infoFormGroups = (this.form.controls['info'] as FormArray).controls;
                this.form.controls['name'].setValidators([Validators.required]);
                this.form.controls['image'].setValidators([Validators.required]);
                this.form.controls['price'].setValidators([Validators.required]);
                this.form.controls['categoryId'].setValidators([Validators.required]);
                this.form.controls['description'].setValidators([Validators.required]);

                this.fileName = this.product.imageName;
                this.file = this.product.imageFile;


                this.form.patchValue({
                    image: {
                        file: this.file,
                        fileName: this.fileName
                    }
                });

                this.isInitForm = true;
            });

        // this.http.post('get-category',
        //   {
        //     id: this.route.snapshot.paramMap.get('id')
        //   }
        // ).subscribe(category => {

        // })


    }

    onSubmit(): void {
        const formData = this.form.getRawValue();
        console.log(formData);
        formData.info = formData.info.filter((obj: any) => obj.title || obj.text)
        this.http.patch(`${environment.apiUrl}/api/products/${this.currentProductId}`, formData)
            .subscribe((res: any) => {
                    alert(res.message)
                    this.router.navigate(['products']).finally();
                },
                error => console.log(error))
    }

    addNewAddressGroup() {
        const add = this.form.get('info') as FormArray;
        console.log(add);
        add.push(new FormGroup({
            title: new FormControl(''),
            text: new FormControl('')
        }))
    }

    deleteAddressGroup(index: number) {
        const isDelete = confirm('Вы действительно хотите удалить поля?')
        if (isDelete) {
            const add = this.form.get('info') as FormArray;
            add.removeAt(index)
        }
    }
}

