import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-zא-ת]+$')]),
    email: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'), Validators.email]),
    passwordHash: new FormControl("", [Validators.required, Validators.minLength(8) ]),
    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
    phone: new FormControl("", [Validators.required, Validators.pattern('^[0-9]{7,9}$')])
  })
  constructor(private _userService: UserService, private router: Router){}//, private _loginService: LoginService, private cookieService: CookieManagerService) { }

  onSubmit() {
    if (this.registerForm.valid) {
      this._userService.addUser(this.registerForm.value).subscribe({
        next: (response) => {
          console.log("register seccsefull")
          //Login 
        },
        error: (err) => {
          console.error('Register error:', err);
          alert('Register failed. Please check your credentials and try again.');
          //Why? handle error
          //-server error
          //-email exists error
        }
      });

    }
    else {
      this.registerForm.markAllAsTouched();
    }

  }
}
