import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDistrictTargetsComponent } from './local-district-targets.component';

describe('LocalDistrictTargetsComponent', () => {
  let component: LocalDistrictTargetsComponent;
  let fixture: ComponentFixture<LocalDistrictTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDistrictTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDistrictTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
