import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { GetInTouchComponent } from './pages/get-in-touch/get-in-touch.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'get-in-touch', component: GetInTouchComponent },
  { path: 'thank-you', component: ThankYouComponent }
];
