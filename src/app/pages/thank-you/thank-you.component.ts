import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
export class ThankYouComponent {}
