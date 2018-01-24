import { Component, OnInit } from '@angular/core'
import { CompanyService } from '../company.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 50.443612
  lng = -104.611938
  zoom = 12

  constructor (public companyService: CompanyService, private router: Router) {
  }

  ngOnInit () {
  }

  goto (id) {
    this.router.navigate(['/companies', id])
  }

}
