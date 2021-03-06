import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByComponent } from './filter-by.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilterByComponent', () => {
  let component: FilterByComponent;
  let fixture: ComponentFixture<FilterByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ FilterByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
