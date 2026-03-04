import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  dogs: number;
  price: number | string;
}

interface FrequencyOption {
  name: string;
  frequency: string;
  unit: string;
  plans: PricingPlan[];
  highlight?: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  constructor(private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  pricingOptions: FrequencyOption[] = [
    {
      name: 'Once a Month',
      frequency: 'Monthly',
      unit: 'Per Cleanup',
      plans: [
        { dogs: 1, price: 69 },
        { dogs: 2, price: 78 },
        { dogs: 3, price: 86 },
        { dogs: 4, price: 99 }
      ]
    },
    {
      name: 'Twice a Week',
      frequency: 'Per Cleanup',
      unit: 'Per Cleanup',
      plans: [
        { dogs: 1, price: 21 },
        { dogs: 2, price: 23 },
        { dogs: 3, price: 25 },
        { dogs: 4, price: 27 }
      ]
    },
    {
      name: 'Weekly',
      frequency: 'Every Week',
      unit: 'Per Cleanup',
      highlight: true,
      plans: [
        { dogs: 1, price: 24.99 },
        { dogs: 2, price: 27.99 },
        { dogs: 3, price: 29.99 },
        { dogs: 4, price: 32.99 }
      ]
    },
    {
      name: 'Bi-Weekly',
      frequency: 'Every 2 Weeks',
      unit: 'Per Cleanup',
      plans: [
        { dogs: 1, price: 39.99 },
        { dogs: 2, price: 35.99 },
        { dogs: 3, price: 49.99 },
        { dogs: 4, price: 55.99 }
      ]
    }
  ];

  // Special offer for 3 dogs weekly
  specialOffer = {
    frequency: 'Once a Week',
    dogs: 3,
    price: 110,
    period: 'per month'
  };

}
