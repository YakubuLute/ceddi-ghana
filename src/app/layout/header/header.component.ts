import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IconComponent } from '../../shared/components/icon/icon.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false
  isScrolled: boolean = false
  openDropdown: string | null = null

  toggleMenu (): void {
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isMenuOpen) {
      this.openDropdown = null
    }
  }

  closeMenu (): void {
    this.isMenuOpen = false
    this.openDropdown = null
  }

  toggleDropdown (dropdown: string): void {
    this.openDropdown = this.openDropdown === dropdown ? null : dropdown
  }

  @HostListener('window:scroll', [])
  onWindowScroll (): void {
    this.isScrolled = window.pageYOffset > 50
  }

  @HostListener('window:resize', ['$event'])
  onResize (event: any): void {
    if (event.target.innerWidth > 900) {
      this.closeMenu()
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick (event: Event): void {
    const target = event.target as HTMLElement
    if (!target.closest('.dropdown')) {
      this.openDropdown = null
    }
  }
}
