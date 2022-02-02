import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  });
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.disable();

    const userData = {
      login: this.form.get('login')?.value,
      password: sha256(this.form.get('password')?.value)
    }


    this.authService.login(userData)
      .subscribe(
        res => {
          this.router.navigate(['categories']);
          this.form.enable();
        },
        error => {
          alert(error.error.message);
          this.form.enable();
        })

  }

}
