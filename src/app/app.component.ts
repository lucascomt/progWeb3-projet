import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BibliothequeComponent } from "./bibliotheque/bibliotheque.component";
import { ListeSommaireComponent } from "./liste-sommaire/liste-sommaire.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BibliothequeComponent, ListeSommaireComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progWeb3-projet';
}
