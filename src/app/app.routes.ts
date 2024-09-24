import { Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';



export const routes: Routes = [
    { path: '', loadComponent: () => import('./Components/login/login.component').then(l=>l.LoginComponent)},
    { path: 'question', loadComponent: () => import('./Components/faqs/faqs.component').then(q=>q.FAQsComponent),canActivate: [authGuard] },
    { path: 'register', loadComponent: () => import('./Components/register/register.component').then(r=>r.RegisterComponent)},
    { path: 'forgot-password', loadComponent: () => import('./Components/forgot-password/forgot-password.component').then(f=>f.ForgotPasswordComponent)},
    { path: 'logout', loadComponent: () => import('./Components/logout/logout.component').then(l=>l.LogoutComponent),canActivate: [authGuard]},


];
