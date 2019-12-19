import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TechListComponent } from './tech-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from '../company.service';

describe('TechListComponent', () => {
  let component: TechListComponent;
  let fixture: ComponentFixture<TechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ TechListComponent ],
      providers: [CompanyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
