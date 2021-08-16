import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Citizen } from '../models/citizen.model';

@Injectable({
  providedIn: 'root',
})
export class CitizenRestServiceService {
  constructor(private http: HttpClient) {}

  getCitizens() {
    return this.http.get<Citizen[]>(environment.baseURI + 'citizens/');
  }

  addCitizen(citizenData: Citizen) {
    return this.http.post(environment.baseURI + 'citizens/', citizenData);
  }

  getCitizen(id: any) {
    return this.http.get<Citizen>(environment.baseURI + `citizens/${id}`);
  }

  deleteCitizen(id: number) {
    return this.http.delete(environment.baseURI);
  }

  updateCitizen(citizenData: Citizen) {
    return this.http.put(environment.baseURI, citizenData);
  }
}
