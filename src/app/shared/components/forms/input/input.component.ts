
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() parentFormGroup: any;
  @Input() controlName: any;



  constructor() { }

  ngOnInit(): void {
    
  }

}
