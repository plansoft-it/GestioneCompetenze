import { Component, Input, OnInit } from '@angular/core';
import { Dipendente } from '../dipendenti-inteface';
import { DIPENDENTI } from '../lista-fittizia';
import { UserIdService } from '../user-id.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeapProfiler } from 'inspector';


@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit {
  //@Input() employee:Dipendente;

  employee: Dipendente;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userIdService: UserIdService,

  ) { }



  ngOnInit(): void {
    this.getEmployee();

  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //route.snapshot is a static image of the route information shortly after the component was created.
                                                         // aramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the employee to fetch.  

    this.userIdService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
}




