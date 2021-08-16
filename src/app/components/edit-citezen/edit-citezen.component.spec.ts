import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitezenComponent } from './edit-citezen.component';

describe('EditCitezenComponent', () => {
  let component: EditCitezenComponent;
  let fixture: ComponentFixture<EditCitezenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCitezenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitezenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
