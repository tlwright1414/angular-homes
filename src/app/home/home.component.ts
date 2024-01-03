import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CustomerComponent } from '../customer/customer.component';
import { Customer } from '../customer';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            HousingLocationComponent,
            CustomerComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" 
        [housingLocation]="housingLocation"></app-housing-location>
    </section>
    <section>
      <app-customer [customer]="customer"></app-customer>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    // this.housingLocationList = this.housingService.getAllHousingLocations();
    // this.filteredLocationList = this.housingLocationList;

    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  customer: Customer = {
    id: 1234,
    name: 'Travis Wright',
    height: '6-2',
    age: 44,
    weight: 195
  };
}
