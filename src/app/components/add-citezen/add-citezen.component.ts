import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CitizenRestServiceService } from 'src/app/services/citizen-rest-service.service';

@Component({
  selector: 'app-add-citezen',
  templateUrl: './add-citezen.component.html',
  styleUrls: ['./add-citezen.component.scss'],
})
export class AddCitezenComponent implements OnInit {
  loading: boolean = false;
  formGroup: FormGroup;

  constructor(
    private rest: CitizenRestServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: NbToastrService
  ) {
    this.formGroup = this.formBuilder.group({
      nationality_id: [''],
      first_name: [''],
      last_name: [''],
      phone_number: [''],
      gender: [''],
      state: [''],
    });
  }
  addCitizen() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.rest.addCitizen(this.formGroup.value).subscribe(
        (res) => {
          console.log({ res });
          this.loading = false;
          this.router.navigateByUrl('tabs');
          this.toast.success('Added Succesfully');
          this.formGroup.reset();
        },
        (err) => {
          this.loading = false;
          this.toast.danger('Something Went Wrong');
        }
      );
    }
  }
  ngOnInit(): void {}
}
