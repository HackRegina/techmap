import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesByTechComponent } from './companies-by-tech.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from '../company.service';

describe('CompaniesByTechComponent', () => {
  let component: CompaniesByTechComponent;
  let fixture: ComponentFixture<CompaniesByTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ CompaniesByTechComponent ],
      providers: [CompanyService]
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
