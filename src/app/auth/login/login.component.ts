import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private titleService: Title
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Log In Page');
  }

  login(event?: KeyboardEvent) {
    if ((event && event?.key !== 'Enter') || this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(take(1)).subscribe();
  }
}
