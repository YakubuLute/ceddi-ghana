import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AtAGlanceComponent } from './at-a-glance/at-a-glance.component';
import { ImpactCounterComponent } from './impact-counter/impact-counter.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SuccessStoryComponent } from './success-story/success-story.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AtAGlanceComponent,
    ImpactCounterComponent,
    UpcomingEventsComponent,
    SuccessStoryComponent,
    NewsletterSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
