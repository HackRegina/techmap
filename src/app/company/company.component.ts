import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  id
  tech

  constructor (public companyService: CompanyService, private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.id = this.route.snapshot.paramMap.get('id')
    this.tech = this.route.snapshot.paramMap.get('tech')

    this.companyService.filterById(this.id)
  }

}
