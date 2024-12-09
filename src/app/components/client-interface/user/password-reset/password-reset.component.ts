import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../‏‏services/user/user.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {

  resetForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required])//, passwordMatchValidator()]),
  })
  token?: any
  constructor(private _userService: UserService, private route: ActivatedRoute) { }


  handleClick =()=>{
this.route.paramMap.subscribe(params => {
      if (params.has('token')) {
        this.token = params.get('token');
      }
    });
//valide token

   this._userService.passwordReset(this.resetForm.controls['password'].value, this.token).subscribe({
     next: (response) => {
       console.log("Password reset successful")
     },
     error: (error) => {
       console.error("Password reset failed", error)
       //why? server |handle error
     }
   })

  }
  
}

// export const passwordMatchValidator = ()=>{
//   return (control: FormControl): ValidationErrors | null => {
//     if(control.value === controls.p['password']?.value){
//       return null;
//     }
//     return {passwordMismatch: true}
  // }
// }
