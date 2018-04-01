import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies

  constructor (public companyService: CompanyService) {
  }

  ngOnInit () {
    this.companyService.init()
    this.companies = this.companyService.companies
  }
}
