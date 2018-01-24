import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-companies-by-tech',
  templateUrl: './companies-by-tech.component.html',
  styleUrls: ['./companies-by-tech.component.scss']
})
export class CompaniesByTechComponent implements OnInit {

  companies;
  tech;

  constructor(public companyService: CompanyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tech = this.route.snapshot.paramMap.get('tech');
    this.companyService.filterByTech(this.tech);
  }
}
