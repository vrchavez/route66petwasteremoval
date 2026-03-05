import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('route66petwasteremoval');

  private meta = inject(Meta);
  private pageTitle = inject(Title);

  constructor() {
    this.pageTitle.setTitle('Route 66 Pet Waste Removal - Professional Pet Waste Cleanup Services');
    this.meta.addTags([
      { name: 'description', content: 'Professional pet waste removal services for a cleaner, healthier yard. Affordable pricing with flexible scheduling.' },
      { name: 'keywords', content: 'pet waste removal, dog poop cleanup, yard maintenance, pet services' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Route 66 Pet Waste Removal' },
      { property: 'og:description', content: 'Professional pet waste cleanup services for a cleaner, healthier yard.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://vrchavez.github.io/route66petwasteremoval/' },
      { property: 'og:image', content: 'https://vrchavez.github.io/route66petwasteremoval/assets/truckPicv2.png' }
    ]);
  }
}
