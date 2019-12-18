import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { AgmCoreModule } from '@agm/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from './company.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent,
        MenuComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDqI3d8iyamjWvFSSGn1XlhTCxTBl6TBrk'
        })
      ],
      providers: [CompanyService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
