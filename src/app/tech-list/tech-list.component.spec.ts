import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechListComponent } from './tech-list.component';

describe('TechListComponent', () => {
  let component: TechListComponent;
  let fixture: ComponentFixture<TechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechListComponent ]
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
