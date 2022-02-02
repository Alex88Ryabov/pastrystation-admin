import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.sass']
})
export class InputPasswordComponent implements OnInit {
  @Input() parentFormGroup: any;
  @Input() controlName: any;
  @Input() placeholder: any;
  constructor() { }

  ngOnInit(): void {
  }

}
