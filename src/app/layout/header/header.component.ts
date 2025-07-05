import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false
  isScrolled: boolean = false

  toggleMenu (): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu (): void {
    this.isMenuOpen = false
  }

  @HostListener('window:scroll', [])
  onWindowScroll (): void {
    this.isScrolled = window.pageYOffset > 50
  }

  @HostListener('window:resize', [])
  onWindowResize (): void {
    if (window.innerWidth > 900) {
      this.isMenuOpen = false
    }
  }
}
