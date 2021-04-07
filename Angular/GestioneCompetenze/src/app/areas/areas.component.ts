import { Component, OnInit } from '@angular/core';
import { COMPETENZE } from '../lista-comp-fittizia';
import { Competenze } from '../competences-interface';
import { UserIdService } from '../user-id.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Area } from '../area-interface';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  area: Area;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userIdService: UserIdService,
  ) { }

  ngOnInit(): void {
    this.getAreaObservable();
  }


  getAreaObservable(): void {
    const id = +this.route.snapshot.paramMap.get('id');  //route.snapshot is a static image of the route information shortly after the component was created.
                                                          // aramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the employee to fetch.  

    this.userIdService.getAreaObservable(id)
      .subscribe(area => this.area = area);
  }
}
