import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  houseLocation:HousingLocation[]=[
     {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      // photo: `${this.baseUrl}/example-house.jpg`,
      photo: '../assets/house1.avif',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
     {
      id: 32,
      name: 'Test2 Home',
      city: 'Test city',
      state: 'ST',
      photo: '../assets/house1.avif',    
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }
  ];
}
