import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/client-interface/layout/nav/nav.component";
import { FooterComponent } from "./components/client-interface/layout/footer/footer.component";
import { EmbroideryComponent } from './components/client-interface/products/embroidery/embroidery.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent,EmbroideryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Magic-Frontend';
}
