import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent {
  // model fields bound to form controls
  name = '';
  email = '';
  phone = '';
  message = '';

  prefillInfo = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['plan']) {
        const lines = [];
        lines.push(`Selected Plan: ${params['plan']}`);
        if (params['frequency']) lines.push(`Frequency: ${params['frequency']}`);
        if (params['dogs']) lines.push(`Dogs: ${params['dogs']}`);
        if (params['price']) lines.push(`Price: ${params['price']}`);
        this.prefillInfo = lines.join('\n');
      }
    });
  }

  onSubmit(): void {
    // no-op; form handled by FormSubmit
  }
}
