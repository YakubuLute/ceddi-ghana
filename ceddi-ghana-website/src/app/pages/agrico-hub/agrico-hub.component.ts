import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agrico-hub',
  imports: [MatCardModule],
  templateUrl: './agrico-hub.component.html',
  styleUrl: './agrico-hub.component.scss'
})
export class AgricoHubComponent {
  visitAgricoHub() {
    window.open('https://agricohub.com', '_blank');
  }
}
