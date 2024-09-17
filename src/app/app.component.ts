import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQsComponent } from './Components/faqs/faqs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FAQsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Magic-Frontend';
}
