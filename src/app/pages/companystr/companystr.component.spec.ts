import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanystrComponent } from './companystr.component';

describe('CompanystrComponent', () => {
  let component: CompanystrComponent;
  let fixture: ComponentFixture<CompanystrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanystrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanystrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
