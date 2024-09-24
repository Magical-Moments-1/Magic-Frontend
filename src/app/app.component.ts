import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQsComponent } from './Components/faqs/faqs.component';
import { LogoutComponent } from "./Components/logout/logout.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FAQsComponent, LogoutComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Magic-Frontend';
}
