import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { GoogleLoginComponent } from './Components/google-login/google-login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'con', component: GoogleLoginComponent },

    { path: 'question', loadComponent: () => import('./Components/faqs/faqs.component').then(q=>q.FAQsComponent)},
    { path: 'register', loadComponent: () => import('./Components/register/register.component').then(r=>r.RegisterComponent)},
    { path: '', loadComponent: () => import('./Components/login/login.component').then(l=>l.LoginComponent)},


];
