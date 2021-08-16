import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private util:UtilityService, private router:Router) {

  }


  selectService(service:string){
    this.util.selectedService = service;
    this.router.navigate(["/tabs"])
  };

  ngOnInit(): void {
  }

}
