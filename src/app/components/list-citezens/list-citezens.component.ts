import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Citizen } from 'src/app/models/citizen.model';
import { CitizenRestServiceService } from 'src/app/services/citizen-rest-service.service';
import { CitizenSoapServiceService } from 'src/app/services/citizen-soap-service.service';
import { EditCitezenComponent } from '../edit-citezen/edit-citezen.component';

@Component({
  selector: 'app-list-citezens',
  templateUrl: './list-citezens.component.html',
  styleUrls: ['./list-citezens.component.scss'],
})
export class ListCitezensComponent implements OnInit {
  loading: boolean = false;
  citizenList: any;
  constructor(
    soap: CitizenSoapServiceService,
    private rest: CitizenRestServiceService,
    private dialog: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getCitizens();
  }

  citizenDetails(citizen: Citizen) {
    console.log({ citizen });

    this.dialog.open(EditCitezenComponent, {
      hasBackdrop: true,
      autoFocus: true,
      context: { citizenID: citizen.id },
    });
  }

  getCitizens() {
    this.loading = true;
    this.rest.getCitizens().subscribe((res) => {
      console.log({ res });
      this.citizenList = res;
      this.loading = false;
    });
  }
}
