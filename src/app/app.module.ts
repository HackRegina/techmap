import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from './map/map.component';
import {MenuComponent} from './menu/menu.component';
import {CompanyService} from "./company.service";
import {RouterModule} from "@angular/router";
import {TechListComponent} from './tech-list/tech-list.component';
import {CompaniesByTechComponent} from './companies-by-tech/companies-by-tech.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {CompanyComponent} from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    TechListComponent,
    CompaniesByTechComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCs-qU03I53l6ApyEB7c7MXzm06SGr2SHU'
    }),
    RouterModule.forRoot([
      {path: '', component: TechListComponent},
      {path: 'tech/:tech', component: CompaniesByTechComponent},
      {path: 'company/:id', component: CompanyComponent},
      // {path: 'forms/:formId', component: ManageFormComponent, resolve: {form: ManageFormResolver}},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
