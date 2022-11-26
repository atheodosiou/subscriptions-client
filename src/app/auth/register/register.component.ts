import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private titleService: Title
  ) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Register Page');
  }

  register(event?: KeyboardEvent) {
    if ((event && event?.key !== 'Enter') || this.registrationForm.invalid) {
      return;
    }
    this.authService
      .register(this.registrationForm.value)
      .subscribe((res) => console.log(res));
  }
}
