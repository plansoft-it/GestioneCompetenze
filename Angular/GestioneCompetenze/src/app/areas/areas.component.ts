import { Component, OnInit } from '@angular/core';
import { COMPETENZE } from '../lista-comp-fittizzia';
import { Competenze } from '../competences-interface';
import { UserIdService } from '../user-id.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  area: Competenze;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userIdService: UserIdService,
  ) { }

  ngOnInit(): void {
    this.getCompetence();
  }


  getCompetence(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //route.snapshot is a static image of the route information shortly after the component was created.
                                                          // aramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the employee to fetch.  

    this.userIdService.getCompetence(id)
      .subscribe(area => this.area = area);
  }
}
