import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from '../company.service';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDqI3d8iyamjWvFSSGn1XlhTCxTBl6TBrk'
        })
      ],
      declarations: [ MapComponent ],
      providers: [CompanyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
