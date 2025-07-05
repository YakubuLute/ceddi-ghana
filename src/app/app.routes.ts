import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'ecosystem',
    loadComponent: () =>
      import('./pages/ecosystem/ecosystem.component').then(
        m => m.EcosystemComponent
      )
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./pages/programs/programs.component').then(
        m => m.ProgramsComponent
      )
  },
  {
    path: 'impact-stories',
    loadComponent: () =>
      import('./pages/impact-stories/impact-stories.component').then(
        m => m.ImpactStoriesComponent
      )
  },
  {
    path: 'partner',
    loadComponent: () =>
      import('./pages/partner/partner.component').then(m => m.PartnerComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
]
