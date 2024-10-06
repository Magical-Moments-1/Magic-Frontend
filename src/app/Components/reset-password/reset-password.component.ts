import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from '../../Models/ResetPassword';
import { HttpErrorResponse } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  resetPasswordForm!: FormGroup;
  showSuccess!: boolean;
  showError!: boolean;
  errorMessage!: string;
  token!: string;

  constructor(private _userService: UsersService, private fb: FormBuilder,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    this.resetPasswordForm.get('confirm')!.setValidators([Validators.required]);
    this.token = this.route.snapshot.queryParams['token'];
  }
   

  resetPassword(): void {
    
    if (this.resetPasswordForm.valid) {
      const resetPass: ResetPassword = {
        password: this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirm,
        token: this.token
      }
      console.log(resetPass);
      this._userService.resetPassword(resetPass).subscribe({
        next: (_) => {
          this.showSuccess = true;
          this.router.navigate(['/']); 
        },
        error: (err: HttpErrorResponse) => {
          this.showError = true;
          this.errorMessage = err.message;
        }
      })
    }
  }
}
