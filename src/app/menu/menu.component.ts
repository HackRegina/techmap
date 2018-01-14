import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  techs;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.techs = this.companyService.techs;
  }

  filterByTech(tech){
    this.companyService.filterByTech(tech);
  }

}
