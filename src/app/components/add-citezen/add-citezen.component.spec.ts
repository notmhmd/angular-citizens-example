import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitezenComponent } from './add-citezen.component';

describe('AddCitezenComponent', () => {
  let component: AddCitezenComponent;
  let fixture: ComponentFixture<AddCitezenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitezenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitezenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
