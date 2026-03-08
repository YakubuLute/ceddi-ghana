import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter, Subscription } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private routerSubscription!: Subscription;
  private lastScrollTop = 0;
  private delta = 5;
  private navbarHeight = 100;

  @ViewChild('navbar') navbarRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled();
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  ngAfterViewInit() {
    // Ensure the navbar element is available before using it
    this.hasScrolled(); // initial scroll check
  }

  hasScrolled() {
    if (!this.navbarRef?.nativeElement) return;

    const st = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = this.navbarRef.nativeElement;

    // ✅ Add or remove 'headroom--not-top' based on scroll position
    if (st > 0) {
      this.renderer.addClass(navbar, 'headroom--not-top');
    } else {
      this.renderer.removeClass(navbar, 'headroom--not-top');
    }

    // Skip if scroll difference is too small
    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }

    // Scroll Down
    if (st > this.lastScrollTop && st > this.navbarHeight) {
      this.renderer.removeClass(navbar, 'headroom--pinned');
      this.renderer.addClass(navbar, 'headroom--unpinned');
    } else {
      // Scroll Up
      if (st + window.innerHeight < document.body.scrollHeight) {
        this.renderer.removeClass(navbar, 'headroom--unpinned');
        this.renderer.addClass(navbar, 'headroom--pinned');
      }
    }

    this.lastScrollTop = st <= 0 ? 0 : st; // Prevent negative scrolling
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
