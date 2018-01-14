import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesByTechComponent } from './companies-by-tech.component';

describe('CompaniesByTechComponent', () => {
  let component: CompaniesByTechComponent;
  let fixture: ComponentFixture<CompaniesByTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesByTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesByTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
