import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.sass']
})
export class TextareaComponent implements OnInit {

    @Input() parentFormGroup: any;
    @Input() controlName: any;
    @Input() placeholder: any;
    @Input() label: any;

  constructor() { }

  ngOnInit(): void {
  }

}
