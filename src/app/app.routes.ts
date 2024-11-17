import { Routes } from '@angular/router';
import { LoginComponent } from './components/client-interface/user/login/login.component';
import { RegisterComponent } from './components/client-interface/user/register/register.component';
import { PasswordResetLinkComponent } from './components/client-interface/user/password-reset-link/password-reset-link.component';
import { PasswordResetComponent } from './components/client-interface/user/password-reset/password-reset.component';
import { ProductComponent } from './components/client-interface/products/product/product.component';
import { ProductListComponent } from './components/client-interface/products/product-list/product-list.component';
import { HomeComponent } from './components/client-interface/layout/home/home.component';


export const routes: Routes = [
    { path: '',component:HomeComponent},
    { path: 'login',component:LoginComponent},
    { path: 'register',  component:RegisterComponent},
    { path: 'password-reset', component:PasswordResetLinkComponent},
    { path: "password-reset/:token", component: PasswordResetComponent },
    // { path: 'logout',component:LogoutComponent,canActivate: [authGuard]},

    { path: "product/:id", component: ProductComponent },
    { path: "products/:catId", component: ProductListComponent }


];
