import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Route 66 Pet Waste Removal - Home');
    this.meta.updateTag({ name: 'description', content: 'Welcome to Route 66 Pet Waste Removal. Professional pet waste cleanup services for a cleaner, healthier yard.' });
  }
}
