import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';
import { ForgotPassword } from '../../Models/ForgotPassword';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  public errorMessage = "This field is required";
  constructor(private _userService: UsersService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
    });
  }

  forgotPassword(): void {
    if (this.forgotPasswordForm.valid) {
      let forgotPass: ForgotPassword = {
        email: this.forgotPasswordForm.value.email,
        clientURI: 'http://localhost:4200/forgot-password/reset-password'
      }
      this._userService.forgotPassword(forgotPass).subscribe({
        next: (response) => {
          alert("נשלח לך סיסמה למייל");
        },
        error: (err) => {
          console.error('Login error:', err);
        }
      });
    }
  }
}

