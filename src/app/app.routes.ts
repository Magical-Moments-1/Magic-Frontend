import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'question', loadComponent: () => import('./Components/faqs/faqs.component').then(q=>q.FAQsComponent)},
    { path: 'register', loadComponent: () => import('./Components/register/register.component').then(r=>r.RegisterComponent)},
    { path: '', loadComponent: () => import('./Components/login/login.component').then(l=>l.LoginComponent)},


];
