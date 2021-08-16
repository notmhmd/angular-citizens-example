import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitezensComponent } from './list-citezens.component';

describe('ListCitezensComponent', () => {
  let component: ListCitezensComponent;
  let fixture: ComponentFixture<ListCitezensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCitezensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitezensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
