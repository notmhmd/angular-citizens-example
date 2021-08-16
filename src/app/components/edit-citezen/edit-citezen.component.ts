import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CitizenRestServiceService } from 'src/app/services/citizen-rest-service.service';

@Component({
  selector: 'app-edit-citezen',
  templateUrl: './edit-citezen.component.html',
  styleUrls: ['./edit-citezen.component.scss'],
})
export class EditCitezenComponent implements OnInit {
  formGroup: FormGroup;
  // @Input()
  citizenID!: number;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private rest: CitizenRestServiceService,
    private toast: NbToastrService,
    protected ref: NbDialogRef<EditCitezenComponent>
  ) {
    this.formGroup = this.formBuilder.group({
      id: [''],
      nationality_id: [''],
      first_name: [''],
      last_name: [''],
      phone_number: [''],
      gender: [''],
      state: [''],
    });
  }

  ngOnInit(): void {
    console.log(this.citizenID, 'citizenID');
    this.getCitizen();
  }

  async getCitizen() {
    this.rest.getCitizen(this.citizenID).subscribe((citizen) => {
      this.formGroup.setValue(citizen);
    });
  }

  updateCitizen() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.rest.updateCitizen(this.formGroup.value).subscribe(
        (res) => {
          console.log(res);
          this.loading = false;
          this.toast.success('Updated Succesfully');
        },
        (err) => {
          console.log({ err });
          this.loading = false;
          this.toast.danger('Something Went Wrong');
        }
      );
    }
  }
}
