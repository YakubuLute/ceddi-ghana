import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleMobileMenu(): void {
    this.sidenav.toggle();
  }
}
