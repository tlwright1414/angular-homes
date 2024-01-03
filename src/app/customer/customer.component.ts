import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="customer">
    <h1 class="customer-heading">Customer</h1>
    <h3 class="customer-details">{{customer.id}}</h3>
    <h3 class="customer-details">{{customer.name}}</h3>
    <h3 class="customer-details">{{customer.weight}}</h3>
    <h3 class="customer-details">{{customer.height}}</h3>
    <h3 class="customer-details">{{customer.age}}</h3>
  </section>
  `,
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  
  @Input() customer!: Customer;

}
