import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  selectedService:string = "rest";

  constructor() { }
}
