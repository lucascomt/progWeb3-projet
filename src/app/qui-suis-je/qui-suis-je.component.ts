import { Component } from '@angular/core';

@Component({
  selector: 'app-qui-suis-je',
  standalone: true,
  imports: [],
  templateUrl: './qui-suis-je.component.html',
  styleUrl: './qui-suis-je.component.css'
})
export class QuiSuisJeComponent {
    age!: number;
  
    ngOnInit() {
      this.age = this.calculateAge('1975-08-12');
    }
  
    calculateAge(birthdate: string): number {
      const birthDate = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    }
  
}
