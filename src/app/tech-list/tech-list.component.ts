import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  techs
  hover: string

  constructor (public companyService: CompanyService) {
  }

  ngOnInit () {
    this.companyService.init()
    this.techs = this.companyService.techs.sort((a,b) => a && b && a.percentage && b.percentage ? b.percentage - a.percentage : 0)
  }

}
