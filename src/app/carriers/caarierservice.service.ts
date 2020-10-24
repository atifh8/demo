import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaarierserviceService {

  constructor() { }
  getCarriers() {
    return carriers;
  }
}


const carriers = [
  {
    "carrierId": '11211',
    "carrierTitle": "Test Carrier 1",
    "modifiedDate": "13102020",
    "modifiedBy": "Test User 1",
    "version": "1.2.2",
    "currentState": "Active",
    "lock": false
  },
  {
    "carrierId": '11212',
    "carrierTitle": "Test Carrier 2",
    "modifiedDate": "10102020",
    "modifiedBy": "Test User 2",
    "version": "1.2.3",
    "currentState": "Draft",
    "lock": true
  },
  {
    "carrierId": '11213',
    "carrierTitle": "Test Carrier 3",
    "modifiedDate": "13102019",
    "modifiedBy": "Test User 1",
    "version": "1.2.1",
    "currentState": "Draft",
    "lock": false
  },
  {
    "carrierId": '11214',
    "carrierTitle": "Test Carrier 4",
    "modifiedDate": "11102020",
    "modifiedBy": "Test User 3",
    "version": "1.3.1",
    "currentState": "Active",
    "lock": true
  },
];