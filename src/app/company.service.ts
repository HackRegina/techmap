import {Injectable} from '@angular/core';

import * as data from '../assets/data.json';


@Injectable()
export class CompanyService {

  companies;
  techs;

  constructor() {
    this.companies = data;

    this.techs = Array.from(this.companies.reduce((acc, curr) => {
      curr.technology.forEach(tech => acc.add(tech));
      return acc;
    }, new Set()).values());
  }

  filterByTech(tech) {
    this.companies = data;
    this.companies = this.companies.filter(company => company.technology.includes(tech));
  }

  init() {
    this.companies = data;
  }

  filterById(id) {
    this.companies = this.companies.filter(company => company.id === id);
  }
}
