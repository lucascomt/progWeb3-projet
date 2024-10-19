import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { QuiSuisJeComponent } from "./qui-suis-je/qui-suis-je.component";
import { ProgrammationComponent } from "./programmation/programmation.component";
import { ServeurJeuxComponent } from "./serveur-jeux/serveur-jeux.component";
import { BddComponent } from "./bdd/bdd.component";
import { PhotographieComponent } from "./photographie/photographie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuiSuisJeComponent, ProgrammationComponent, ServeurJeuxComponent, BddComponent, PhotographieComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Óðinn';
}
