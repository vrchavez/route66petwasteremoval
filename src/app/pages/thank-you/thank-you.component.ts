import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="thank-container">
      <h2>Message Sent!</h2>
      <p>Thank you for contacting us. We'll get back to you shortly.</p>
      <button class="primary-button"><a routerLink="/">Return Home</a></button>
    </div>
  `,
  styles: [
    `.thank-container { max-width: 600px; margin: 4rem auto; text-align: center; }
     .primary-button { padding: 1rem 2rem; background-color: #5E7A3A; color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; }
     .primary-button a { text-decoration: none; color: inherit; }`
  ]
})
export class ThankYouComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Thank You - Route 66 Pet Waste Removal');
    this.meta.updateTag({ name: 'description', content: 'Thank you for your message. We have received your contact form and will respond soon.' });
  }
}
