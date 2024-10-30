import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { GoogleLoginComponent } from './Components/google-login/google-login.component';
import { ContactUsComponent } from './Components/User/contact-us/contact-us.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'con', component: GoogleLoginComponent },
    { path: 'contactUs', component: ContactUsComponent},

    { path: 'question', loadComponent: () => import('./Components/faqs/faqs.component').then(q=>q.FAQsComponent)},
    { path: 'register', loadComponent: () => import('./Components/register/register.component').then(r=>r.RegisterComponent)},
    { path: '', loadComponent: () => import('./Components/login/login.component').then(l=>l.LoginComponent)},
    { path: 'contact-us', loadComponent: () => import('./Components/User/contact-us/contact-us.component').then(c=>c.ContactUsComponent)}
];
