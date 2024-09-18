import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users/users.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../Models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm!: FormGroup
  constructor(private _userService: UsersService,private router: Router) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      // "address": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
      "passwordHash": new FormControl("",[Validators.required]),
      "phone": new FormControl("",[Validators.required]),
    })
  }
  register() {
    let name = this.registerForm.value.name
    let passwordHash = this.registerForm.value.passwordHash
    let address = this.registerForm.value.address
    let email = this.registerForm.value.email
    let phone = this.registerForm.value.phone
    let newUser: Users = {
      // id: new ObjectId("existingObjectIdString"),
      name: name,
      email: email,
      passwordHash: passwordHash,
      // userTypeId: new ObjectId("66e16a2326e951e5adde6203"),
      phone: phone,
      // createdAt: new Date()
    };

    this._userService.addUser(newUser).subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem('username', name);
        sessionStorage.setItem('password', passwordHash);
        alert("registration completed")
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
