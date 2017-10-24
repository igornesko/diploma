import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLogoComponent } from './office-logo.component';

describe('OfficeLogoComponent', () => {
  let component: OfficeLogoComponent;
  let fixture: ComponentFixture<OfficeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
