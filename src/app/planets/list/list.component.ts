import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanetRepository } from '../planet-repository';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-planet-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  planets: Observable<any[]>;
  totalPlanets: Observable<number>;
  pageSize: number = 5;
  currentPage: number;

  constructor(private planetRepository: PlanetRepository) { }

  ngOnInit() {
    this.load(1);
  }

  load(page: number) {
    this.currentPage = page;

    this.planets = this.planetRepository.findAll(page, this.pageSize);
    this.totalPlanets = this.planetRepository.count();
  }

  onPage({ pageIndex, pageSize }) {
    this.pageSize = pageSize;

    this.load(pageIndex + 1);
  }
}
