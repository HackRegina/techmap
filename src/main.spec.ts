import { TestBed, async } from '@angular/core/testing';
import * as data from './assets/data.json';
import { IndustryType } from './app/industries.js';
import { Technologies } from './app/technologies.js';

describe('Tech map data.json', () => {
  const companies = data.default || [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));

  describe('Validate data.json', () => {
    it('should be valid json.', async(() => {
      expect(companies).toBeTruthy();
    }));
  });

  companies.forEach(company => {
    describe(`Validate data for ${company.name || '"Unknown company"'}`, () => {
      it(`should have id.`, async(() => {
        expect(company.id).toBeTruthy();
      }));
      it(`should have name.`, async(() => {
        expect(company.name).toBeTruthy();
      }));
      it(`should have website.`, async(() => {
        expect(company.website).toBeTruthy();
      }));
      it(`should have industry.`, async(() => {
        expect(company.industry).toBeTruthy();
      }));
      it(`should have address.`, async(() => {
        expect(company.address).toBeTruthy();
      }));
      it(`should have lat.`, async(() => {
        expect(company.lat).toBeTruthy();
      }));
      it(`should have lng.`, async(() => {
        expect(company.lng).toBeTruthy();
      }));
      it(`should have technology.`, async(() => {
        expect(company.technology).toBeTruthy();
      }));
      it(`should have unique id.`, async(() => {
        const companiesWithId = companies.filter((c) => c.id === company.id);
        expect(companiesWithId.length).toBe(1);
      }));
      it(`should have valid website.`, async(() => {
        const websiteRegExp = RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
        expect(websiteRegExp.test(company.website)).toBeTruthy();
      }));
      it(`should have valid industry.`, async(() => {
        expect(Object.keys(IndustryType)).toContain(company.industry);
      }));
      it(`should have valid technologies.`, async(() => {
        const technologies = [].concat.apply([], Object.keys(Technologies).map(key => Technologies[key]));
        company.technology.forEach(tech => {
          expect(technologies).toContain(tech);
        });
      }));
    });
  });
});
