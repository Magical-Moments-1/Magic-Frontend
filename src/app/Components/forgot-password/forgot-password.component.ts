import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';
import { EmailVerificationPostModel } from '../../Models/EmailVerificationPostModel';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  resetPasswordForm!: FormGroup;

  constructor(private _userService: UsersService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword(): void {
    if (this.resetPasswordForm.valid) {
      let email: EmailVerificationPostModel = {
         email :this.resetPasswordForm.value.email
      }
      this._userService.sentLink(email).subscribe({
        next: (response) => {
          alert(response);
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Login failed. Please check your credentials and try again.');
        }
      });
      // Call your service to send the reset link to the email
      console.log(`Sending password reset link to ${email}`);
    }
  }
}
