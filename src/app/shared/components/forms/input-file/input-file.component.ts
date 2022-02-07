import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.sass']
})
export class InputFileComponent implements OnInit {

    @Input() parentFormGroup: any;
    @Input() controlName: any;
    @Input() label: any;
    @Input() fileName: any;
    @Input() file: any;
    @Input() imgSrc: any;
    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

    env = environment;

    constructor() {
    }

    ngOnInit(): void {
    }

    onFileChange(evt: any) {
        const reader = new FileReader();
        if (evt.target.files && evt.target.files.length) {
            this.onChange.emit(evt.target.files[0]);

            const [file] = evt.target.files;
            this.fileName = evt.target.files[0].name;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.file = reader.result;
                this.parentFormGroup.patchValue({
                    [`${this.controlName}`]: {
                        file: reader.result,
                        fileName: this.fileName
                    }
                });
            };
        }
    }
}
