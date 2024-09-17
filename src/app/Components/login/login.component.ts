import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';
import { Router } from '@angular/router';
import { Users } from '../../Models/Users';
import { LoginService } from '../../Services/Login/login.service';
import { LoginModel } from '../../Models/LoginModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _loginService: LoginService, private router: Router) { }

  public addForm!: FormGroup;
   public user!: LoginModel 

  ngOnInit(): void {
    this.addForm = new FormGroup({
      "name": new FormControl("",[Validators.required, Validators.minLength(9)]),
      "email": new FormControl("",[Validators.required]),
    })
  }
  submit() {
    let newUser: LoginModel = {
      userName: this.addForm.value.name,
      email: this.addForm.value.email,
    }
    this._loginService.login(newUser).subscribe({
      next: (res) => {
        console.log(document.cookie);
        this.router.navigate(['/question'])
      },
      error: (err) => {
        alert(err);
      }
    })
  }
}
