import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQsComponent } from './Components/faqs/faqs.component';
import { LogoutComponent } from "./Components/logout/logout.component";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ContactUsComponent } from './Components/User/contact-us/contact-us.component';
import { EmailComponent } from './Components/Admin/email/email.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, FAQsComponent, ContactUsComponent, EmailComponent, LogoutComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Magic-Frontend';
  
}
