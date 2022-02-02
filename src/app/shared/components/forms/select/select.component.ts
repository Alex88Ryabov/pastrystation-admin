import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

    @Input() label: any;
    @Input() list: any;
    @Input() controlName: any;
    @Input() parentFormGroup: any;

  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
      console.log(this.parentFormGroup.get('categoryId'));
  }

}
