import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  pageTitle: string;

  constructor(private util:UtilityService) {
    this.pageTitle = this.util.selectedService

   }

  ngOnInit(): void {
  }

}
