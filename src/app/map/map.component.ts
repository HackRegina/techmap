import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 50.4528734;
  lng = -104.6174372;
  zoom = 13;


  constructor(public companyService: CompanyService, private router: Router) {
  }

  ngOnInit() {
  }

  goto(id) {
    this.router.navigate(['/company', id]);
  }

}
