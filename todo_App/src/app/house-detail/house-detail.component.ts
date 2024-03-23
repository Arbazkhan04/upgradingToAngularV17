import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent {
    route:ActivatedRoute = inject(ActivatedRoute);
    hosueService : HousingService = inject(HousingService);
    house : HousingLocation | undefined;
    constructor(){
      const id = this.route.snapshot.params['id'];
      this.house = this.hosueService.getHouseById(id);
    }
}
