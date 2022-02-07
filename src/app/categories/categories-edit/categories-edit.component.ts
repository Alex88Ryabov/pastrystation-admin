import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-categories-edit',
    templateUrl: './categories-edit.component.html',
    styleUrls: ['./categories-edit.component.sass']
})
export class CategoriesEditComponent implements OnInit {
    currentCategoryId: string | null = null;
    form: FormGroup = new FormGroup({});
    isInitForm: boolean = false;
    image: any;
    imgSrc: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private router: Router) {
    }

    ngOnInit(): void {
        this.currentCategoryId = this.route.snapshot.paramMap.get('id');
        this.http.get(`${environment.apiUrl}/api/categories/${this.currentCategoryId}`)
            .subscribe((res: any) => {
                console.log(res);
                this.form.addControl('name', new FormControl(res.name));
                this.form.addControl('image', new FormControl(''));

                this.form.controls['name'].setValidators([Validators.required]);
                this.form.controls['image'].setValidators([Validators.required])

                this.imgSrc = res.imageSrc;

                this.isInitForm = true;
            });
    }

    onSubmit(): void {
        const formData = new FormData();

        formData.append('image', this.image, this.image.name)
        formData.append('name', this.form.get('name')?.value)
        this.http.patch(`${environment.apiUrl}/api/categories/${this.currentCategoryId}`, formData)
            .subscribe((res: any) => {
                alert(res.message)
                this.router.navigate(['categories']).finally();
            },
                error => console.log(error))
    }

    setImage(file: any): void {
        this.image = file;
    }
}
