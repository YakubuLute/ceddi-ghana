import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  private routerEventsSub!: Subscription;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.routerEventsSub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd || event instanceof NavigationStart)
      )
      .subscribe(event => {
        this.isCollapsed = true; // Close mobile menu on navigation

        if (event instanceof NavigationStart) {
          // Save scroll position before navigation
          sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        } else if (event instanceof NavigationEnd) {
          // Handle scroll position after navigation
          const scrollPosition = sessionStorage.getItem('scrollPosition');
          if (scrollPosition && this.location.path() !== '/') {
            // Restore scroll position for non-home pages
            setTimeout(() => {
              window.scrollTo(0, +scrollPosition);
            }, 0);
          } else {
            // Scroll to top for home page or when no position is saved
            window.scrollTo(0, 0);
          }
          sessionStorage.removeItem('scrollPosition');
        }
      });
  }

  isHome(): boolean {
    return this.location.path() === '/home' || this.location.path() === '/';
  }

  isDocumentation(): boolean {
    return this.location.path() === '/documentation';
  }

  ngOnDestroy() {
    if (this.routerEventsSub) {
      this.routerEventsSub.unsubscribe();
    }
  }
}
