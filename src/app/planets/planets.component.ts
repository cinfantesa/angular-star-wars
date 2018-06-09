import { Component, OnInit } from '@angular/core';
import { PlanetRepository } from './planet-repository';

@Component({
  selector: 'sw-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetsRepository: PlanetRepository) { }

  ngOnInit() {
  }

}
