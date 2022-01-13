import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.sass']
})
export class InputFileComponent implements OnInit {

  @Input() parentFormGroup: any;
  @Input() controlName: any;

  fileName: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const reader = new FileReader();
    if(evt.target.files && evt.target.files.length) {
      const [file] = evt.target.files;
      this.fileName = evt.target.files[0].name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.parentFormGroup.patchValue({
          [`${this.controlName}`]:{
            file: reader.result,
            fileName: this.fileName 
          }
        })
      }
    }
  }
}
