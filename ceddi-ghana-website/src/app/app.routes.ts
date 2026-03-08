import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AgricoHubComponent } from './pages/agrico-hub/agrico-hub.component';
import { StartccuComponent } from './pages/startccu/startccu.component';
import { YouthEmploymentComponent } from './pages/youth-employment/youth-employment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'agrico-hub', component: AgricoHubComponent },
  { path: 'startccu', component: StartccuComponent },
  { path: 'youth-employment', component: YouthEmploymentComponent },
];
