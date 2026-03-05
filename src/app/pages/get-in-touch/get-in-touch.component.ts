import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {
  // model fields bound to form controls
  name = '';
  email = '';
  phone = '';
  message = '';

  prefillInfo = '';

  private title = inject(Title);
  private meta = inject(Meta);

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

  ngOnInit() {
    this.title.setTitle('Get in Touch - Route 66 Pet Waste Removal');
    this.meta.updateTag({ name: 'description', content: 'Contact Route 66 Pet Waste Removal for professional pet waste cleanup services. Get a quote or schedule your service today.' });
  }

  onSubmit(): void {
    // no-op; form handled by FormSubmit
  }
}
