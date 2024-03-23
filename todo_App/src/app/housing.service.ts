import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected listOfHosue:HousingLocation[]=[
    {
      id: 32,
    name: 'Test2 Home',
    city: 'Test city',
    state: 'ST',
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
  constructor() { }

  getHousingLocation(){
    return this.listOfHosue;
  }

  getHouseById(id:number):HousingLocation | undefined {
    return this.listOfHosue.find((ele)=>ele.id == id);
  }
}
