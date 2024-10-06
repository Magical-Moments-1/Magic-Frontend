import { Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { FAQsComponent } from './Components/faqs/faqs.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    { path: '',component:LoginComponent},
    { path: 'question', component:FAQsComponent,canActivate: [authGuard] },
    { path: 'register',  component:RegisterComponent},
    { path: 'forgot-password', component:ForgotPasswordComponent},
    { path: 'logout',component:LogoutComponent,canActivate: [authGuard]},
    { path: 'forgot-password/reset-password', component: ResetPasswordComponent }
];
