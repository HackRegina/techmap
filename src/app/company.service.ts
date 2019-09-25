import {Injectable} from '@angular/core'

import * as data from '../assets/data.json'
import {SponsorshipTiers} from './sponsorship-tiers.enum'

@Injectable()
export class CompanyService {

  companies
  techs

  constructor() {
    this.companies = data.default || []
    this.companies.sort((a, b) => this.sortCompanies(a, b))

    // this.techs = Array.from(this.companies.reduce((acc, curr) => {
    //   curr.technology.forEach(tech => acc.add(tech))
    //   return acc
    // }, new Set()).values())
    this.techs = [].concat.apply([], this.companies.map(c => c.technology))
      .filter((item, pos, self) => self.indexOf(item) == pos)
      .map(tech => ({
        name: tech,
        percentage: Math.round(this.companies.length > 0 ? this.companies.filter(c => c.technology && c.technology.some(t => t === tech)).length / this.companies.length * 100 : 0)
      }))
      .sort((a,b) => a && b && a.percentage && b.percentage ? b.percentage - a.percentage : 0)
  }

  filterByTech(tech) {
    this.companies = data.default || []
    this.companies = this.companies.filter(company => company.technology.includes(tech)).sort((a, b) => this.sortCompanies(a, b))
  }

  init() {
    this.companies = data.default || []
    this.companies.sort((a, b) => this.sortCompanies(a, b))
  }

  filterById(id) {
    this.companies = this.companies.filter(company => company.id === id).sort((a, b) => this.sortCompanies(a, b))
  }

  sortCompanies(a, b) {
    return this.compareTiers(a, b) !== 0 ?
      this.compareTiers(a, b) :
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  }

  compareTiers(a, b) {
    return SponsorshipTiers[b.sponsorship as string] - SponsorshipTiers[a.sponsorship as string]
  }
}
