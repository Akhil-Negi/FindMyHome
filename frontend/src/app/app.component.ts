import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './MyComponents/header/header.component'
import { CarousalComponent } from './MyComponents/carousal/carousal.component'
import { FooterComponent } from './MyComponents/footer/footer.component'
import { RegisterComponent } from './MyComponents/register/register.component'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,
    CarousalComponent,FooterComponent,
    RegisterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
