import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    infoFormGroups: any;
    isInitForm: boolean = false;
    aboutData: any;
    description: any;

    constructor(private route: ActivatedRoute,
                private http: HttpClient,
                private router: Router) {
    }

    ngOnInit(): void {
        this.http.get(`${environment.apiUrl}/api/about-us`)
            .subscribe((res: any) => {
                this.aboutData = res[0];

                this.form.addControl('title', new FormControl(this.aboutData.title));
                const formArrayInfo: any[] = [];
                this.aboutData.description?.forEach((control: any) => {
                    formArrayInfo.push(new FormGroup({
                        text: new FormControl(control.text)
                    }));
                });
                this.form.addControl('description', new FormArray(formArrayInfo));
                this.infoFormGroups = (this.form.controls['description'] as FormArray).controls;
                this.form.controls['title'].setValidators([Validators.required]);
                this.isInitForm = true;
            });
    }

    onSubmit(): void {
        const formData = this.form.getRawValue();
        console.log(formData);
        this.http.patch(`${environment.apiUrl}/api/about-us/${this.aboutData.id}`, formData)
            .subscribe((res: any) => {
                    alert(res.message);
                },
                error => console.log(error));
    }

    addNewAddressGroup() {
        const add = this.form.get('description') as FormArray;
        console.log(add);
        add.push(new FormGroup({
            text: new FormControl('')
        }));
    }

    deleteAddressGroup(index: number) {
        const isDelete = confirm('Вы действительно хотите удалить поля?');
        if (isDelete) {
            const add = this.form.get('description') as FormArray;
            add.removeAt(index);
        }
    }

}
